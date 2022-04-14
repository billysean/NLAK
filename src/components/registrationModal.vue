<template>
  <div
    @click="checkClick"
    ref="invoiceWrap"
    class="invoice-wrap flex flex-column"
  >
    <form @submit.prevent="submitForm" class="invoice-content">
      <LoadingVue v-if="loading" />
      <h1>Register</h1>

      <!-- Participants -->
      <div class="bill-from flex flex-column">
        <!-- <h4>Participants</h4> -->
        <div class="input flex flex-column">
          <label for="participantName"> Name </label>
          <input
            type="text"
            id="participantName"
            v-model="participantName"
            required
          />
        </div>
        <div class="input flex flex-column">
          <label for="participantEmail"> Email </label>
          <input
            type="email"
            id="participantEmail"
            v-model="participantEmail"
            required
          />
        </div>
        <div class="location-details flex">
          <div class="input flex flex-column">
            <label for="billerCity"> Gender </label>
            <select type="text" id="billerCity" v-model="billerCity" required>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div class="input flex flex-column">
            <label for="Age"> Age </label>
            <input type="text" id="Age" v-model="Age" required />
          </div>
        </div>
      </div>

      <!-- Invoice Work Details -->
      <div class="invoice-work flex flex-column">
        <div class="payment flex">
          <div class="input flex flex-column">
            <label for="serviceDate"> Service Location </label>
            <select
              type="text"
              id="serviceLocation"
              v-model="serviceLocation"
              required
            >
              <option value="GSP">Serpong</option>
              <option value="GBP">Green Bay Pluit</option>
            </select>
          </div>
          <div class="input flex flex-column">
            <label for="serviceDate"> Service Date </label>
            <input
              type="text"
              id="serviceDate"
              v-model="serviceDate"
              disabled
            />
          </div>
        </div>
        <div class="work-items">
          <h3>Friends Invite</h3>
          <table class="item-list">
            <tr class="table-heading flex">
              <th class="friend-name">Name</th>
              <th class="gender">gender</th>
              <th class="age">age</th>
            </tr>

            <tr
              class="table-items flex"
              v-for="(item, index) in participantList"
              :key="index"
            >
              <td class="friend-name">
                <input type="text" v-model="item.itemName" />
              </td>
              <td class="gender">
                <select type="text" v-model="item.gender" required>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </td>
              <td class="age"><input type="text" v-model="item.age" /></td>
              <img
                @click="deleteInvoiceItem(item.id)"
                src="/img/icon-delete.svg"
                alt=""
              />
            </tr>
          </table>
          <div @click="addNewInvoiceItem" class="flex button">
            <img src="/img/icon-plus.svg" alt="" />
            Add More Friend
          </div>
        </div>
      </div>

      <div class="e-sign flex flex-column"></div>

      <!-- Save / Delete / Draft -->
      <div class="save flex">
        <div class="left">
          <button
            type="button"
            @click="closeInvoice"
            class="
              relative
              items-center
              px-4
              py-2
              border border-transparent
              text-sm
              font-medium
              rounded-sm
              shadow-sm
              text-white
              border-white
              bg-red-200
              hover:bg-red-500 hover:shadow-2xl
            "
          >
            Cancel Booking
          </button>
        </div>
        <div class="right">
          <button
            v-if="!editInvoice"
            type="submit"
            @click="saveDraft"
            class="
              relative
              items-center
              px-4
              py-2
              border border-transparent
              text-sm
              font-medium
              rounded-sm
              shadow-sm
              text-white
              border-white
              bg-gray-200
              hover:bg-gray-500 hover:shadow-2xl
            "
          >
            I'll think about it
          </button>
          <button
            type="submit"
            @click="publishInvoice"
            class="
              relative
              items-center
              px-4
              py-2
              border border-transparent
              text-sm
              font-medium
              rounded-sm
              shadow-sm
              text-white
              border-white
              bg-green-200
              hover:bg-green-500 hover:shadow-2xl
            "
          >
            BOOK ME!
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { db } from "../firebase/firebaseInit";

import LoadingVue from "./loading.vue";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { mapActions, mapMutations, mapState } from "vuex";
import { uid } from "uid";
export default {
  name: "invoiceModal",
  data() {
    return {
      loading: null,
      docId: null,
      dateOptions: { year: "numeric", month: "short", day: "numeric" },
      participantName: null,
      Age: null,
      serviceDateUnix: null,
      serviceDate: null,
      participantList: [],
    };
  },
  components: {
    LoadingVue,
  },
  created() {
    //   date
    //   get next sunday date
    var today = new Date();
    today.setDate(today.getDate() + ((0 - 1 - today.getDay() + 7) % 7) + 1);
    this.serviceDateUnix = Date.now();
    this.serviceDate = today.toLocaleDateString("en-us", this.dateOptions);
  },
  methods: {
    ...mapMutations(["TOGGLE_REGISTER"]),

    checkClick(e) {
      if (e.target === this.$refs.invoiceWrap) {
        this.TOGGLE_MODAL();
      }
    },

    closeInvoice() {
      this.TOGGLE_REGISTER();
    },

    addNewInvoiceItem() {
      this.participantList.push({
        id: uid(),
        itemName: "",
        gender: "",
        age: 0,
        total: 0,
      });
    },

    deleteInvoiceItem(id) {
      this.participantList = this.participantList.filter(
        (item) => item.id !== id
      );
    },

    callInvoiceTotal() {
      this.invoiceTotal = 0;
      this.participantList.forEach((item) => {
        this.invoiceTotal += item.total;
      });
    },

    publishInvoice() {
      this.invoicePending = true;
    },

    saveDraft() {
      this.invoiceDraft = true;
    },

    async uploadInvoice() {
      if (this.participantList.lengt <= 0) {
        alert("item list is empty.");
        return;
      }

      this.loading = true;
      this.callInvoiceTotal();

      try {
        const docRef = await addDoc(collection(db, "invoices"), {
          invoiceId: uid(6),
          participantName: this.participantName,
          billerCity: this.billerCity,
          Age: this.Age,
          billerCountry: this.billerCountry,
          clientName: this.clientName,
          clientEmail: this.clientEmail,
          clientStreetAddress: this.clientStreetAddress,
          clientCity: this.clientCity,
          clientZipCode: this.clientZipCode,
          clientCountry: this.clientCountry,
          serviceDateUnix: this.serviceDateUnix,
          serviceDate: this.serviceDate,
          paymentTerms: this.paymentTerms,
          paymentDueDateUnix: this.paymentDueDateUnix,
          paymentDueDate: this.paymentDueDate,
          productDescription: this.productDescription,
          invoicePending: this.invoicePending,
          invoiceDraft: this.invoiceDraft,
          participantList: this.participantList,
          invoiceTotal: this.invoiceTotal,
          invoicePaid: null,
        });
        console.log(docRef);
      } catch (e) {
        console.log(e);
      }

      this.loading = false;
      //   const database = db.collection("invoices").doc('invoice');
      //   await database.set({

      //   });

      this.TOGGLE_INVOICE();
      this.GET_INVOICES();
    },

    async updateInvoice() {
      if (this.participantList.lengt <= 0) {
        alert("item list is empty.");
        return;
      }

      this.loading = true;
      this.callInvoiceTotal();

      try {
        const docRef = await updateDoc(
          doc(collection(db, "invoices"), this.docId),
          {
            participantName: this.participantName,
            billerCity: this.billerCity,
            Age: this.Age,
            billerCountry: this.billerCountry,
            clientName: this.clientName,
            clientEmail: this.clientEmail,
            clientStreetAddress: this.clientStreetAddress,
            clientCity: this.clientCity,
            clientZipCode: this.clientZipCode,
            clientCountry: this.clientCountry,
            serviceDateUnix: this.serviceDateUnix,
            serviceDate: this.serviceDate,
            paymentTerms: this.paymentTerms,
            paymentDueDateUnix: this.paymentDueDateUnix,
            paymentDueDate: this.paymentDueDate,
            productDescription: this.productDescription,
            participantList: this.participantList,
            invoiceTotal: this.invoiceTotal,
          }
        );
        console.log(docRef);
      } catch (e) {
        console.log(e);
      }

      this.loading = false;
      //   const database = db.collection("invoices").doc('invoice');
      //   await database.set({

      //   });

      const data = {
        docId: this.docId,
        routeId: this.$route.params.invoiceId,
      };

      this.UPDATE_INVOICE(data);
    },

    submitForm() {
      if (this.editInvoice) {
        this.updateInvoice();
        return;
      }
      this.uploadInvoice();
    },
  },
  computed: {
    ...mapState(["editInvoice", "currentInvoiceArray"]),
  },
  watch: {
    paymentTerms() {
      const futureDate = new Date();
      this.paymentDueDateUnix = futureDate.setDate(
        futureDate.getDate() + parseInt(this.paymentTerms)
      );
      this.paymentDueDate = new Date(
        this.paymentDueDateUnix
      ).toLocaleDateString("en-us", this.dateOptions);
    },
  },
};
</script>

<style lang="scss" scoped>
.flex-scss {
  display: flex;
}

.flex-column {
  flex-direction: column;
}

.invoice-wrap {
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  background-color: transparent;
  width: 100%;
  height: 100vh;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  .invoice-content {
    position: relative;
    padding: 56px;
    max-width: 700px;
    width: 100%;
    background-color: #fff;
    color: #141625;
    box-shadow: 10px 4px 6px -1px rgba(0, 0, 0, 0.2),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);

    h1 {
      font-size: 24px;
      margin-bottom: 32px;
      color: #141625;
    }

    h3 {
      margin-bottom: 16px;
      color: #7c5dfa;
      font-size: 18px;
      color: #777f98;
    }

    h4 {
      color: #7c5dfa;
      font-size: 14px;
      margin-bottom: 24px;
    }

    // Bill To / Bill From
    .bill-to,
    .bill-from {
      margin-bottom: 48px;

      .location-details {
        gap: 16px;
        div {
          flex: 1;
        }
      }
    }

    // invoice work
    .invoice-work {
      .payment {
        gap: 24px;
        div {
          flex: 1;
        }
      }
    }

    .e-sign {
      margin-top: 48px;
      align-items: center;
      gap: 24px;
      div {
        flex: 1;
      }
    }

    .work-items {
      .item-list {
        width: 100%;

        // Item Table Styling
        .table-heading,
        .table-items {
          gap: 16px;
          font-size: 12px;

          .friend-name {
            flex-basis: 50%;
          }
          .gender {
            flex-basis: 20%;
          }
          .age {
            flex-basis: 20%;
          }
        }

        .table-heading {
          margin-bottom: 16px;

          th {
            text-align: left;
          }
        }

        .table-items {
          position: relative;
          margin-bottom: 24px;

          img {
            position: absolute;
            top: 15px;
            right: 0;
            width: 12px;
            height: 16px;
          }
        }
      }

      .button {
        color: #000;
        background-color: #e4e4e4;
        align-items: center;
        justify-content: center;
        width: 100%;
        cursor: pointer;

        img {
          margin-right: 4px;
        }
      }
    }
  }

  .save {
    margin-top: 60px;
    div {
      flex: 1;
    }
    .right {
      justify-content: end;
    }
  }

  .input {
    margin-bottom: 24px;
  }

  label {
    font-size: 12px;
    margin-bottom: 6px;
  }

  input,
  select {
    width: 100%;
    background-color: rgb(243, 243, 243);
    color: #141625;
    border-radius: 4px;
    padding: 12px 4px;
    border: none;

    &:focus {
      outline: none;
    }
  }
}
</style>
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
          <label for="name"> Name </label>
          <input
            type="text"
            id="name"
            v-model="name"
            required
          />
        </div>
        <div class="location-details flex">
          <div class="input flex flex-column">
            <label for="email"> Email </label>
            <input type="email" id="email" v-model="email" required />
          </div>
          <div class="input flex flex-column">
            <label for="Phone"> Phone </label>
            <input type="text" id="Phone" v-model="phone" required />
          </div>
        </div>
        <div class="location-details flex">
          <div class="input flex flex-column">
            <label for="gender"> Gender </label>
            <select type="text" id="gender" v-model="gender" required>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div class="input flex flex-column">
            <label for="Age"> Age </label>
            <input type="text" id="Age" v-model="age" required />
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
              id="serviceLoc"
              v-model="serviceLoc"
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
              v-for="(participant, index) in participantList"
              :key="index"
            >
              <td class="friend-name">
                <input type="text" v-model="participant.name" />
              </td>
              <td class="gender">
                <select type="text" v-model="participant.gender" required>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </td>
              <td class="age">
                <input type="number" v-model="participant.age" />
              </td>
              <img
                @click="deleteFriend(participant.id)"
                src="/img/icon-delete.svg"
                alt=""
              />
            </tr>
          </table>
          <div @click="addNewFriend" class="flex button">
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
            @click="closeRegister"
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
            type="submit"
            @click="draft"
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
            @click="valid"
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
import { collection, addDoc } from "firebase/firestore";
import { mapMutations } from "vuex";
import { uid } from "uid";
export default {
  name: "registrationModal",
  data() {
    return {
      bookingStatus: null,
      email: null,
      phone: null,
      loading: null,
      docId: null,
      serviceLoc:null,
      dateOptions: { year: "numeric", month: "short", day: "numeric" },
      name: null,
      age: null,
      gender: null,
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

    closeRegister() {
      this.TOGGLE_REGISTER();
    },

    addNewFriend() {
      this.participantList.push({
        id: uid(),
        name: "",
        gender: "",
        age: null,
      });
    },

    deleteFriend(id) {
      this.participantList = this.participantList.filter(
        (item) => item.id !== id
      );
    },

    valid() {
      this.bookingStatus = "valid";
    },

    draft() {
      this.bookingStatus = "draft";
    },

    async addToDatabase() {
      this.loading = true;

      try {
        const docRef = await addDoc(collection(db, "sundayService"), {
          bookingId: uid(6),
          name: this.name,
          email: this.email,
          phone: this.phone,
          gender: this.gender,
          serviceLoc: this.serviceLoc,
          Age: this.age,
          serviceDateUnix: this.serviceDateUnix,
          serviceDate: this.serviceDate,
          participantList: this.participantList,
          bookingStatus: this.bookingStatus
        });
        console.log(docRef);
      } catch (e) {
        console.log(e);
      }

      this.loading = false;

      this.TOGGLE_REGISTER();
    },

    submitForm() {
      this.addToDatabase();
    },
  },
  computed: {},
  watch: {},
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
        border-radius: 30px;
        width: 100%;
        padding: 10px;
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
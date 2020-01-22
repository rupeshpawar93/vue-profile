<template>
  <div>
    <Header @show-list="addTitle" />
    <p>Message from server: "{{ messages }}"</p>
    <h3>{{ title }}</h3>
    <div v-if="loader">
      <Loader />
    </div>
    <div v-else>
      <b-table striped hover :fields="fields" :items="items">
        <template v-slot:cell(actions)="row">
          <b-button
            size="sm"
            @click="info(row.item, row._id, $event.target)"
            class="mr-1"
          >Detail View</b-button>
        </template>
      </b-table>
      <span class="link" @click="next">Next</span>
      <span class="link" @click="prev">Prev</span>
    </div>
  </div>
</template>
<style scoped>
.link {
  color: blue;
  text-decoration: underline;
  cursor: pointer;
}
</style>
<script>
import Header from "./../reuse/Header";
import Loader from "./../reuse/Loader";
import axios from "axios";
import io from "socket.io-client";

export default {
  name: "Home",
  components: { Header, Loader },
  data() {
    return {
      fields: [
        { key: "id", sortable: true },
        { key: "Name", sortable: true },
        { key: "Path", sortable: true },
        { key: "UserId", sortable: true },
        { key: "Created At", sortable: true },
        { key: "actions", label: "Action" }
      ],
      items: [],
      obj: {},
      title: "Video List",
      loader: false,
      page: 0,
      messages: "",
      socket: io(
        "ws://ec2-15-206-153-167.ap-south-1.compute.amazonaws.com:3000/",
        { transports: ["polling"] }
      )
    };
  },
  methods: {
    next() {
      this.loader = true;
      this.items = [];

      this.$store
        .dispatch("fileList", [this.title, ++this.page])
        .then(result => {
          result.forEach((element, index) => {
            this.obj["Name"] = element.name
              ? element.name
              : element.originalname;
            this.obj["Path"] = element.path;
            this.obj["UserId"] = element.user_id.name;
            this.obj["Created At"] = element.createdAt;
            this.obj["id"] = element._id;
            this.items.push(this.obj);
            this.obj = {};
          });
          this.loader = false;
        })
        .catch(err => {});
    },
    prev() {
      this.loader = true;
      this.items = [];
      if (this.page == 0) {
        this.page = 0;
      } else {
        --this.page;
      }
      this.$store
        .dispatch("fileList", [this.title, this.page])
        .then(result => {
          result.forEach((element, index) => {
            this.obj["Name"] = element.name
              ? element.name
              : element.originalname;
            this.obj["Path"] = element.path;
            this.obj["UserId"] = element.user_id.name;
            this.obj["Created At"] = element.createdAt;
            this.obj["id"] = element._id;
            this.items.push(this.obj);
            this.obj = {};
          });
          this.loader = false;
        })
        .catch(err => {});
    },
    info(item, index, button) {
      this.$router.push({ name: "DetailFile", params: { id: item.id } });
    },
    addTitle(param) {
      this.title = param;
      this.loader = true;
      this.items = [];
      this.$store
        .dispatch("fileList", [param, 0])
        .then(result => {
          result.forEach((element, index) => {
            this.obj["Name"] = element.name
              ? element.name
              : element.originalname;
            this.obj["Path"] = element.path;
            this.obj["UserId"] = element.user_id.name;
            this.obj["Created At"] = element.createdAt;
            this.obj["id"] = element._id;
            this.items.push(this.obj);
            this.obj = {};
          });
          this.loader = false;
        })
        .catch(err => {});
    }
  },
  mounted() {
    this.socket.on("MESSAGE", data => {
      console.log("hiit");
      this.messages = data;
      // you can also do this.messages.push(data)
    });
    this.$store
      .dispatch("fileList", ["Video List", 0])
      .then(result => {
        result.forEach((element, index) => {
          this.obj["Name"] = element.name ? element.name : element.originalname;
          this.obj["Path"] = element.path;
          this.obj["UserId"] = element.user_id.name;
          this.obj["Created At"] = element.createdAt;
          this.obj["id"] = element._id;
          this.items.push(this.obj);
          this.obj = {};
        });
        this.loader = false;
      })
      .catch(error => {});
  }
};
</script>

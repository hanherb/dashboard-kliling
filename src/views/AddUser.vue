<template lang="pug">
  d-row.h-100(align-v='center', align-h='center')
    d-form
      .form-group
        label Email
        d-input( type="text" v-model="input.email" placeholder="Email")
      .form-group
        label Full Name
        d-input( type="text" v-model="input.fullname" placeholder="Full Name")
      .form-group
        label Role
        d-form-select( :options="roles" v-model="input.role" placeholder="Role")
      .form-group
        label User Management Authority
        div
          d-checkbox( label="create" v-model="input.authority" value="create") Create
        div
          d-checkbox( label="update" v-model="input.authority" value="update") Update
        div
          d-checkbox( label="delete" v-model="input.authority" value="delete") Delete
        label API Authority
        div( v-for="plugin in plugins")
          d-checkbox( :label="plugin.name" v-model="input.authority" :value="plugin.name") {{plugin.name}}
      .form-group
        label Password
        d-input( type="password" v-model="input.password" placeholder="Password")
      .form-group
        label Confirm Password
        d-input( type="password" v-model="input.confirm_password" placeholder="Confirm Password")
      d-button( type="button" v-on:click="addUser()") Submit
</template>

<script>
import graphqlFunction from '../graphqlFunction';
import address from '../address';
import headers from '../headers';

export default {
  name: 'add-user',
  data(){
      return{
        input:{
          email: "",
          fullname: "",
          role: "",
          authority: [],
          password: "",
          confirm_password: ""
        },
        roles: [],
        plugins: []
      }
  },

  created: function()
  {
      this.fetchRole();
      this.fetchPlugin();
  },

  methods: {
      fetchRole() {
        this.axios.get(address + ":3000/get-role", headers).then((response) => {
          let query = `query getAllRole {
            roles {
                role_name
            }
          }`;
          graphqlFunction.graphqlFetchAll(query, (result) => {
            for(let i = 0; i < result.roles.length; i++) {
              let temp = {
                'text': result.roles[i].role_name,
                'value': result.roles[i].role_name
              }
              this.roles.push(temp);
            }
          });
        });
      },

      fetchPlugin() {
        this.axios.get(address + ":3000/get-plugin", headers).then((response) => {
          let query = `query getAllPlugin {
            plugins {
              name
              status
            }
          }`;
          graphqlFunction.graphqlFetchAll(query, (result) => {
            this.plugins = result.plugins;
          });
        });
      },

      addUser() {
        let postObj = {
          email: this.input.email, 
          fullname: this.input.fullname,
          role: this.input.role,
          authority: this.input.authority,
          password: this.input.password
        };
        this.axios.post(address + ':3000/create-user', postObj, headers)
        .then((response) => {
          postObj._id = response.data.insertedIds[0];
          let query = `mutation createSingleUser($input:PersonInput) {
              createUser(input: $input) {
                  fullname
              }
          }`;
          let variables = {
            input: postObj
          }
          graphqlFunction.graphqlMutation(query, variables, (result) => {
            alert("Add User Success");
            this.$router.push('/users');
          });

        });
      }
  }
};
</script>
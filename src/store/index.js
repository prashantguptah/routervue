import { createStore } from 'vuex';
import axios from "axios"


export default createStore({
  state: {
    loading: false,
    successMessage: '',
    errorMessage: '',
    userData:'',
    loggedin:false
  },
  mutations: {
    setLoading(state, loading) {
      state.loading = loading;
    },
    setSuccessMessage(state, message) {
      state.successMessage = message;
    },
    setErrorMessage(state, message) {
      state.errorMessage = message;
    },
    setUserData(state,value){
      state.userData = value
    },
    setLoggedIn(state, value) {  
      state.loggedin = value;
    }
  },
  actions: {
    async login({ commit }, { username, password }) {
      commit('setLoading', true);
      commit('setErrorMessage', '');
      commit('setSuccessMessage', '');
      
    
      try {
        
        const response = await axios.post(
          'https://dummyjson.com/auth/login',
          {
            username , 
            password,  
          },
         
        );
    
        commit('setLoggedIn', true);
        commit('setSuccessMessage', 'Login successful!');
        commit('setUserData',response.data)
        console.log('Login successful:', response.data);
       
      } catch (error) {
        commit('setLoggedIn', false);
        commit(
          'setErrorMessage',
          error.response?.data?.message || 'Login failed. Please check your username and password.'
        );
        
        console.error('Error:', error.response?.data || error.message);
      } finally {
        commit('setLoading', false);
      }
    }
,    
    
    async register({ commit }, { username, password }) {
      commit('setLoading', true);
      commit('setErrorMessage', '');
      commit('setSuccessMessage', '');

      try {
        const response = await axios.post('https://dummyjson.com/users/add', {
          username,
          password,
          name: 'John Doe',
        });

        commit('setSuccessMessage', 'Registration successful!');
        console.log('Registration successful:', response.data);
      } catch (error) {
        commit(
          'setErrorMessage',
          error.response?.data?.message || 'Registration failed. Please try again.'
        );
        console.error('Error:', error);
      } finally {
        commit('setLoading', false);
      }
    },
    setSsMessage({commit}, msg){
      commit("setSuccessMessage", msg)
      commit("setErrorMessage", msg)
    }

    
  },
  getters: {
    loading: (state) => state.loading,
    successMessage: (state) => state.successMessage,
    errorMessage: (state) => state.errorMessage,
    getUserInfo: (state) => state.userData, // Full user object
    getEmail: (state) => state.userData?.email || '',  // Extract email safely
    getUsername: (state) => state.userData?.username || '', // Extract username
    getImage: (state) => state.userData?.image || '' ,// Extract image
    getFirstName: (state) => state.userData?.firstName  || '' ,// Extract image
    getLastName: (state) => state.userData?.lastName || '' ,// Extract image
    getGender: (state) => state.userData?.gender || '' ,// Extract image
  },
});

let actions = {
  createNewUser: function() {
    return {
      type: 'CREATE_USER',
      id: Math.round(Math.random() * 100)
    }
  }
};

export default actions;

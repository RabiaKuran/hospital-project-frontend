const TokenHelper = {
  isValid: () => {
    return !!TokenHelper.getToken();
  },
  getToken:()=>{
    const token = window.localStorage.getItem("token");
    return token;
  }
};

export default TokenHelper;

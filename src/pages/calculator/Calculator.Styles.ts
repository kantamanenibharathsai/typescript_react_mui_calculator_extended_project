const calculatorStyles = {
  mainContainer: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  childContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // border: "2px solid red",
    gap: "40px",
  },

  calculatorHeading: {
    fontSize: "40px",
    color: "#0F1924",
    fontWeight: "700",
  },

  calculatorContainer: {
    // border: "2px solid red",
    // height: "400px",
    width: "500px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    borderRadius: "16px",
    padding: "30px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  displayNosContainer: {
    //  border: "2px solid red",
    height: "150px",
    width: "100%",
    px: "20px",
    // paddingTop: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#c5e8d1",
    borderRadius: "10px",
  },

  displayNumsText: {
    fontSize: "25px",
  },

  resultText: {
    fontSize: "30px",
  },

  numsBtnsContainer: {
    // border: "2px solid red",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "10px",
  },

  buttonNumText: {
    // background: '#c5e8d1 !important',
    color: "white",
    // "& .MuiTouchRipple-root":{
    //     backgroundColor: '#c5e8d1',
    //     color: "black"
    // }
  },
};

export default calculatorStyles;

import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  mainContainer: {
    marginTop: "200px",
  },
  innerContainer: {
    display: "flex",
    justifyContent: "center",
  },
  form: {
    width: "60%",
    display: "flex",
    flexDirection: "column",
    rowGap: 20,
  },
  submitButton: {
    padding: "12px 0px !important",
  },
  "@media (max-width: 732px)": {
    form: {
      width: "90%",
    },
  },
});

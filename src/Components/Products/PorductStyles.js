import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  productsMainContainer: {
    padding: "0 !important",
    marginTop: "50px",
  },
  productsContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "10px",
  },
});

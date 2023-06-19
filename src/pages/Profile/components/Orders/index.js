import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { capitalize } from "lodash";
import moment from "moment/moment";

import styles from "./styles.module.scss";

const Order = ({ createdAt, totalPrice, id, ordersList }) => {
  const timeOrder = moment(createdAt).format("DD-MM-yyyy [at] HH:mm:ss");
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            "& .MuiAccordionSummary-content": {
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              justifyContent: "space-between",
              alignItems: "center",
            },
          }}
        >
          <div>{timeOrder}</div>
          <div>{id}</div>
          <div>{totalPrice}$</div>
        </AccordionSummary>
        <AccordionDetails>
          <div className={styles.titleOrders}>
            <h4>Product</h4>
            <h4>Name</h4>
            <h4>Price</h4>
            <h4>Quantity</h4>
            <h4>Total</h4>
          </div>
          {ordersList.map(({ id, name, image, quantity, price }) => (
            <div key={id} className={styles.wrapperDetails}>
              <img src={image} alt={name} className={styles.image} />
              <p>{capitalize(name)}</p>
              <p>{price}$</p>
              <p>{quantity}</p>
              <p>{price * quantity}$</p>
            </div>
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Order;

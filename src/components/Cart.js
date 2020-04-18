import React, { useState } from "react"
import { connect } from "react-redux"
import { makeStyles } from "@material-ui/core/styles"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import DeleteIcon from "@material-ui/icons/Delete"
import { removeFromCart } from "../store/app"

function rand() {
  return 0
  return Math.round(Math.random() * 20) - 10
}

function getModalStyle() {
  const top = 50 + rand()
  const left = 50 + rand()

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: "rgba(10, 10, 10, 0.9)",
    color: "#919191",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))

const Cart = ({ cart, dispatch }) => {
  const classes = useStyles()
  const [modalStyle] = useState(getModalStyle)
  return (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Cart Items</h2>

      <div>
        {cart.split("/").map(it => {
          if (it.lenght === 0 || it === "") return null
          return (
            <ListItem button>
              <ListItemText primary={it} />
              <DeleteIcon onClick={() => dispatch(removeFromCart(it))} />
            </ListItem>
          )
        })}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return { cart: state.app.cart }
}

export default connect(mapStateToProps, null)(Cart)

import { Button } from '@mui/material'
import SeacthIcon from '../../../assets/icons/search.svg'
import classes from './SeacrhButton.module.css'

function SearchButton({ onSubmit }) {
  return (
    <div className={classes.SeacrhButton}>

      <Button 
        className={classes.SeacrhButton__element} 
        variant="contained"
        onClick={ onSubmit }
        >        
        <img src={SeacthIcon} alt="" />

      </Button>

    </div> 
  )
}

export default SearchButton
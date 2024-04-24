import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';



import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import InfoIcon from '@mui/icons-material/Info';

const Account = () => {
  return (
    <Paper className='rtl !bg-transparent !shadow-none' sx={{ minWidth: '100%' }}>
      <MenuList className=''>
      

        <MenuItem>
          <ListItemIcon>
            <PermIdentityIcon />
          </ListItemIcon>
          <div className='flex-auto'>
            <span className='font-1'>اطلاعات حساب کاربری</span>
          </div>
          <Typography variant="body2" color="text.secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>

          </Typography>
        </MenuItem>
        <Divider className='!m-0' />
        
        <MenuItem>
          <ListItemIcon>
            <ShoppingCartCheckoutIcon />
          </ListItemIcon>
          <div className='flex-auto'>
            <span className='font-1'>سفارشات من</span>
          </div>
          <Typography variant="body2" color="text.secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>

          </Typography>
        </MenuItem>
        <Divider className='!m-0' />

        <MenuItem >
          <ListItemIcon>
            <FavoriteBorderIcon />
          </ListItemIcon>
          <div className='flex-auto'>
            <span className='font-1'>لایک</span>
          </div>
          <Typography variant="body2" color="text.secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>

          </Typography>
        </MenuItem>
        <Divider className='!my-1' />

        <MenuItem>
          <ListItemIcon>
            <PhoneOutlinedIcon />
          </ListItemIcon>
          <div className='flex-auto'>
            <span className='font-1'>پشتیبانی</span>
          </div>
          <Typography variant="body2" color="text.secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>

          </Typography>
        </MenuItem>
        <Divider className='!m-0' />

        <MenuItem>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <div className='flex-auto'>
            <span className='font-1'>درباره ما</span>
          </div>
          <Typography variant="body2" color="text.secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>

          </Typography>
        </MenuItem>
        <Divider className='!m-0' />



        <MenuItem>
          <ListItemIcon>
            <PhoneOutlinedIcon  />
          </ListItemIcon>
          <ListItemText>Web Clipboard</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  )
}

export default Account

import { ButtonBase } from '@mui/material';
import './App.css'
import Card1 from './components/Card1';
import { useState } from "react"
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import ClearIcon from '@mui/icons-material/Clear';
// // info 
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

// select
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// search 
import TextField from '@mui/material/TextField';

// table 
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';


// modal Add
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const top100Films = [
  { label: 'RM', year: 1994 },
  { label: 'Suga', year: 1972 },
  { label: 'V', year: 1974 },
  { label: 'Jungkook', year: 2008 },
  { label: 'Jimin', year: 1957 },
  { label: "J-Hope", year: 1993 },
]



const App = () => {

  const [todo, setTodo] = useState([
    {
      id: 1,
      name: "Suga",
      city: "Dushanbe",
      status: "true",
      number: "51692812",
      icon: "",
      completed: false
    },
    {
      id: 2,
      name: "RM",
      city: "Korea",
      status: "false",
      number: "2595259095",
      icon: "",
      completed: false
    },
    {
      id: 3,
      name: "J-Hope",
      city: "Dushanbe",
      status: "false",
      number: "2595259095",
      icon: "",
      completed: false
    },
    {
      id: 4,
      name: "Jimin",
      city: "Korea",
      status: "false",
      number: "2595259095",
      icon: "",
      completed: false
    },
  ])

  const [btnD, setBtnD] = useState(false)

  // Func Brackdowns 
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // modalAdd
  const [openAdd, setOpenAdd] = useState(false);
  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);

  // modalEdit
  const [openEdit, setOpenEdit] = useState(false);
  const handleOpenEdit = (e) => {
    let user = todo.find((el) => el.id == e)
    console.log(user);
    setOpenEdit(true)
    setIdx(e)
    setNameEdit(user.name);
    setCityEdit(user.city);
    setNumberEdit(user.number)
    setStatusEdit(user.status);
  };
  const handleCloseEdit = () => setOpenEdit(false);



  const [search, setSearch] = useState("")
  const [selected, setSelected] = useState("")
  const [statusA, setStatusA] = useState("")
  const [idx, setIdx] = useState(null)

  // input 
  // add
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  //итихоб 
  const [click, setClick] = useState("")
  const [clickN, setClickN] = useState("")

  // input 
  // edit
  const [nameEdit, setNameEdit] = useState("")
  const [cityEdit, setCityEdit] = useState("")
  const [numberEdit, setNumberEdit] = useState("")
  const [statusEdit, setStatusEdit] = useState("")

  function addUser() {
    let newUser = {
      id: new Date().getTime(),
      name: name,
      number: number,
      status: clickN,
      city: click,
      icon: "",
      completed: false
    }
    setTodo([...todo, newUser])
    setName("")
    handleCloseAdd(false)
  }

  // COMUSER
  function comUser(id) {
    let data = todo.map((e) => {
      if (e.id === id) {
        if (e.status == 'true') {
          e.status = 'false'
        } else {
          e.status = 'true'
        }
      }
      return e
    })
    setTodo(data)
  }
  console.log(idx);

  function editUser() {
    let changeUser = todo.map((e) => {
      if (e.id === idx) {
        e.img = imgEdit;
        e.name = nameEdit;
        e.email = emailEdit;
        e.city = cityEdit;
        e.number = numberEdit;
        e.status = statusEdit;
      }
      return e;
    });
    setTodo(changeUser);
    handleCloseEdit(false);
  }
  // DELETE
  function deleteUser(idx) {
    // console.log(idx);
    setTodo(
      todo.filter((elem) => {
        return elem.id != idx
      })
    )
  }

  const list = () => (
    <Box
      sx={{ width: 400 }}
      role="presentation"
      onClick={() => setBtnD(false)}
      onKeyDown={() => setBtnD(false)}
    >
      <List>
        <Box sx={{ display: "flex", padding: "15px", justifyContent: "space-between", alignItems: "center" }}>
          <ClearIcon onClick={() => setBtnD(false)} />
          <Typography fontWeight={700} sx={{ fontSize: "28px" }}>User info</Typography>
        </Box>
        <Divider />
      </List>
      {todo.map((e) => {
        if (e.id == idx) {
          return (

            <List>
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "28px" }}>
                <Typography sx={{ fontSize: "24px", fontWeight: "600" }}>{e.name}</Typography>
              </Box>
              <Divider sx={{ margin: "25px" }} />
              <Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "25px" }}>
                  <Typography align="right" sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <LockIcon />City
                  </Typography>
                  <Typography>{e.city}</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "25px" }}>
                  <Typography align="right" sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <WatchLaterIcon />Status
                  </Typography>
                  <Button sx={{ width: "100px", color: "black", borderRadius: "none", backgroundColor: e.status == 'true' ? "green" : "rgba(116, 137, 152, 1)", color: "white" }}>{e.status == "true" ? "Active" : "Inactive"}</Button>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "25px" }}>
                  <Typography align="right" sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <LocalOfferIcon />Number
                  </Typography>
                  <Typography>{e.number}</Typography>

                </Box>
              </Box>
            </List>
          )
        }
      })}
    </Box>
  );


  // html tailwind/css todolist mui and ant 
  return (
    <>
      <div>
        <section id="sec1" className='lg:h-[120vh] md:h-[109vh] sm:h-[200vh]'>
          <div>
            <nav className='lg:px-[200px] pt-[50px] flex items-center justify-between md:px-[20px] sm:px-[5px]'>
              <img src="src/assets/img/Group 4.png" alt="" />
              <aside className='text-[white] lg:flex items-center gap-[45px] sm:hidden md: hidden'>
                <p>О нас</p>
                <p>Преимущества</p>
                <p>Работа сервиса</p>
                <p>Вступить в White list</p>
              </aside>
              {/* btn */}
              <aside className='lg:flex items-center lg:gap-[26px] md:flex md:gap-[8px] sm:hidden' >
                <ButtonBase sx={{ color: "white", padding: "8px", paddingLeft: "30px", paddingRight: "30px", border: "1px solid white", borderRadius: "10px" }}>Логин</ButtonBase>
                <ButtonBase sx={{ color: "black", padding: "8px", paddingLeft: "30px", paddingRight: "30px", border: "1px solid white", bgcolor: "white", borderRadius: "10px" }}>Регистрация</ButtonBase>
              </aside>
              <img src="src/assets/img/Menu.png" className="lg:hidden md:block" />
              {/* <Switcher/> */}
            </nav>

            {/*  */}
            <div className='flex justify-center  lg:items-start md:items-center lg:p-[0] md:pt-[10px] md:px-[20px] md:flex-nowrap sm:flex-wrap lg:gap-[0] md:gap-[0] sm:gap-[30px] sm:p-[20px]' >
              {/* left */}
              <aside className='flex flex-col lg:gap-[20px] md:gap-[25px] sm:gap-[20px]'>
                <h2 className=' lg:pt-[150px] sm:pt-[30px] md:w-[350px] sm:w-[300px] sm:text-[22px] md:text-[20px] lg:text-[40px] font-[800] lg:w-[684px] text-white'>Первый в мире сервис для постановки и улучшения русской речи для детей</h2>
                <p className='text-white lg:text-[20px] md:w-[350px] sm:w-[300px] sm:text-[14px] lg:w-[557px]'>Вступите в white-лист и получите 4 бесплатных занятия в числе первых пользователей бесплатно</p>
                <div className='flex items-center gap-[13px]'>
                  <ButtonBase sx={{ color: "white", padding: "8px", paddingLeft: "50px", paddingRight: "50px", border: "1px solid #FF00D6", fontSize: "20px", fontWeight: "700", bgcolor: "#FF00D6", borderRadius: "10px" }}>Вступить</ButtonBase>
                  <p className='text-white lg:block sm:hidden md:block lg:w-[196px] md:-[120px]'>Количество мест <span className='font-[800]'>ограничено</span>!</p>
                </div>
              </aside>

              {/* right */}
              <aside className='lg:pt-[100px] md:pt-[80px] sm:pt-[30px]'>
                <img src="src/assets/img/iPhone 12 Pro Max.png" />
              </aside>
            </div>
            <header id='hd' className='lg:top-[-230px] md:top-[-150px]'></header>
          </div>
        </section>


        {/* section2 */}
        <section>
          <div className=' lg:py-[180px] md:p-[12px] sm:p-[20px] flex justify-center items-center sm:flex-wrap md:flex-nowrap lg:flex-npwrap sm:gap-[50px] md:gap-[0] lg:gap-[0]'>
            {/* left */}
            <aside className='text-[#535353] lg:text-[20px] md:text-[16px] flex flex-col gap-[33px]' >
              <h1 className=' sm:text-[22px] font-[900] lg:text-[40px] md:text-[24px] md:w-[380px] lg:w-[580px] text-black'>Всего 3 минуты, чтобы начать улучшать речь</h1>

              <div className='flex items-center gap-[20px] lg:w-[400px] md:w-[300px]'>
                <img src="src/assets/log/Group 56.png" />
                <p>Скачайте приложение в App Store или Google Play. Зарегистрируйтесь, чтобы отслеживать прогресс ребёнка</p>
              </div>

              {/* 2 */}
              <div className='flex items-center gap-[20px] lg:w-[400px] md:w-[300px]'>
                <img src="src/assets/log/Group 57 (1).png" />
                <p>Загрузите голосовой сэмпл ребёнка (и его проблемной речи)</p>
              </div>

              {/* 3 */}
              <div className='flex items-center gap-[20px] lg:w-[400px] md:w-[300px]'>
                <img src="src/assets/log/Group 58 (1).png" />
                <p>Программа подберет уникальные упражнения, направленные на исправление речи ребёнка</p>
              </div>
            </aside>

            {/* right */}
            <aside>
              <img src="src/assets/img/Group 16.png" className="w-[100%]" />
            </aside>
          </div>



          {/* div2 */}
          <div className=' lg:py-[80px] md:py-[80px] sm:p-[20px] flex justify-center  items-center sm:flex-wrap md:flex-nowrap lg:flex-npwrap sm:gap-[50px] md:gap-[50px] lg:gap-[]'>
            {/* left */}
            <aside>
              <img src="src/assets/img/Frame (9).png" className="lg:block md:block sm:hidden" />
            </aside>


            {/* right */}
            <aside className='text-[#535353] lg:text-[20px] md:text-[16px] flex flex-col gap-[33px]' >
              <h1 className=' sm:text-[22px] font-[900] lg:text-[40px] md:text-[24px] text-black'>Как это работает?</h1>
              <p className='lg:w-[469px] md:w-[269px]'>До банального просто! Inno Lingvo - это маркетплейс, соединяющий логопедов и детей с проблемной речью со всеми возможными вариантами трудностей речи: алалия, дислалия, ОНР, дизартрия, ринолалия, брадилалия, тахилалия, спотыкание, заикание, дислексия и другие</p>
              <ButtonBase sx={{ color: "#3BA3FF", width: "273px", padding: "8px", paddingLeft: "30px", paddingRight: "30px", border: "1px solid #3BA3FF", borderRadius: "10px" }}>Подробнее</ButtonBase>
            </aside>
          </div>
        </section>

   {/* section todo */}
        <section className='lg:block sm:hidden md:hidden'>

            {/*  */}
        {/* search,  */}
        <div className='flex justify-between items-center px-[140px] pt-[80px]'>
          <div className='flex w-[70%] items-center  gap-[16px]'>
            <Box sx={{ minWidth: 120, paddingTop: "0", width: "25%" }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" sx={{ fontSize: "20px" }} value={search} onChange={(e) => setSearch(e.target.value)}>City</InputLabel>
                <Select
                  label="City"
                  value={selected}
                  onChange={(e) => setSelected(e.target.value)}>
                  <MenuItem value=""><em>All cites</em></MenuItem>
                  <MenuItem value="Dushanbe">Dushanbe</MenuItem>
                  <MenuItem value="Korea">Korea</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ minWidth: 120, paddingTop: "0", width: "25%" }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" sx={{ fontSize: "20px" }}>Status</InputLabel>
                <Select
                  value={statusA}
                  label="All status"
                  onChange={(e) => setStatusA(e.target.value)}
                >
                  <MenuItem value=""><em>All status</em></MenuItem>
                  <MenuItem value={"true"}>Active</MenuItem>
                  <MenuItem value={"false"}>Inactive</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>

          <div className='w-[20%] flex items-center gap-[20px]'>
            <TextField id="outlined-basic" label="Search" variant="outlined" type='search' value={search} onChange={(e) => setSearch(e.target.value)} />
            <Button onClick={handleOpenAdd} variant="contained" sx={{ borderRadius: "4px", background: "green" ,padding: "10px", paddingLeft: "20px", paddingRight: "20px", display: "flex", alignItems: "center", gap: "5px" }}>
              <AddIcon /> New
            </Button>
          </div>
        </div>

        {/* modal add */}
        <div>
          <Modal
            open={openAdd}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: "20px" }}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Add_User
                </Typography>
                <ClearIcon onClick={handleCloseAdd} sx={{ cursor: "pointer" }} />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <TextField id="outlined-basic" label="Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />
                <TextField id="outlined-basic" label="Number" variant="outlined" value={number} onChange={(e) => setNumber(e.target.value)} />
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label" sx={{ fontSize: "20px" }} >City</InputLabel>
                  <Select
                    label="City"
                    value={click}
                    onChange={(e) => setClick(e.target.value)}>
                    <MenuItem value="Dushanbe">Dushanbe</MenuItem>
                    <MenuItem value="Korea">Korea</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label" sx={{ fontSize: "20px" }}>Status</InputLabel>
                  <Select
                    value={clickN}
                    label="All status"
                    onChange={(e) => setClickN(e.target.value)}
                  >
                    <MenuItem value={"true"}>Active</MenuItem>
                    <MenuItem value={"false"}>Inactive</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Button sx={{ marginTop: "20px" }} onClick={() => addUser()}>Save</Button>
            </Box>
          </Modal>
        </div>
        {
          <div>
            <Drawer
              anchor="right"
              open={btnD}
              onClose={() => setBtnD(false)}
            >
              {list()}
            </Drawer>
          </div>}

           {/* modal edit */}
        <div>
          <Modal
            open={openEdit}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: "20px" }}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Edit_User
                </Typography>
                <ClearIcon onClick={handleCloseEdit} sx={{ cursor: "pointer" }} />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <TextField id="outlined-basic" label="Name" variant="outlined" value={nameEdit} onChange={(e) => setNameEdit(e.target.value)} />
                <TextField id="outlined-basic" label="Number" variant="outlined" value={numberEdit} onChange={(e) => setNumberEdit(e.target.value)} />
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label" sx={{ fontSize: "20px" }} >City</InputLabel>
                  <Select
                    label="City"
                    value={cityEdit}
                    onChange={(e) => setCityEdit(e.target.value)}>
                    <MenuItem value="Dushanbe">Dushanbe</MenuItem>
                    <MenuItem value="Korea">Korea</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label" sx={{ fontSize: "20px" }}>Status</InputLabel>
                  <Select
                    value={statusEdit}
                    label="All status"
                    onChange={(e) => setStatusEdit(e.target.value)}
                  >
                    <MenuItem value={"true"}>Active</MenuItem>
                    <MenuItem value={"false"}>Inactive</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Button sx={{ marginTop: "20px" }} onClick={() => editUser()}>Save</Button>
            </Box>
          </Modal>
        </div>
        {/* table */}
        <TableContainer sx={{ width: "95%", margin: "0 auto", paddingRiight: "100px", paddingLeft: "100px", paddingBottom: "100px", paddingTop: "40px"}}>
          <Table sx={{ minWidth: 600}} aria-label="customized table">
            <TableHead>
              <TableRow >
                <StyledTableCell align="right"><Typography sx={{textAlign:"start"}}>Name</Typography></StyledTableCell>
                <StyledTableCell align="right"><Typography sx={{textAlign:"start"}}>City</Typography></StyledTableCell>
                <StyledTableCell align="right"><Typography sx={{textAlign:"start"}}>Status</Typography></StyledTableCell>
                <StyledTableCell align="right"> <Typography sx={{textAlign:"start"}}>Phone</Typography></StyledTableCell>
                <StyledTableCell align="right"><Typography sx={{textAlign:"start"}}>Action</Typography></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {todo
                .filter((e) => {
                  return e.name.toLocaleLowerCase().trim().includes(search.toLowerCase().trim())
                })
                .filter((e) => {
                  return e.city.toLocaleLowerCase().trim().includes(selected.toLowerCase().trim())
                })
                .filter((e) => {
                  return e.status.toLocaleLowerCase().trim().includes(statusA.toLowerCase().trim())
                })
                .map((e) => (
                  <StyledTableRow key={e.id}>
                    <StyledTableCell component="th" scope="row">
                      <h1>{e.name}</h1>
                    </StyledTableCell>
                    <StyledTableCell align="right" sx={{ textAlign: "start" }}>{e.city}</StyledTableCell>
                    <StyledTableCell align="right" sx={{ textAlign: "start" }}><ButtonBase sx={{ width: "100px", color: "black", borderRadius: "10px", padding: "5px", backgroundColor: e.status == 'true' ? "blue" : "red", color: "white" }} onClick={() => comUser(e.id)} >{e.status == "true" ? "Active" : "Inactive"}</ButtonBase>
                    </StyledTableCell>

                    <StyledTableCell align="right" sx={{ textAlign: "start" }}>{e.number}</StyledTableCell>
                    <StyledTableCell align="right" sx={{ textAlign: "start" }}><div>
                      <Button

                        color='inherit'
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={(event) => { handleClick(event), setIdx(e.id) }}
                      >
                        <MoreHorizIcon />
                      </Button>
                      <Menu

                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                          'aria-labelledby': 'basic-button',
                        }}
                      >
                        <MenuItem onClick={() => {
                          handleClose()
                          setBtnD(true)
                        }} sx={{ display: "flex", alignItems: "center", gap: "20px" }}><AccountCircleIcon /> View profile</MenuItem>

                        <MenuItem onClick={() => {
                          handleOpenEdit(idx);

                        }} sx={{ display: "flex", alignItems: "center", gap: "20px" }}> <ModeEditIcon /> Edit</MenuItem>
                        <MenuItem onClick={() => {
                          deleteUser(idx)
                          handleClose()
                        }
                        } sx={{ display: "flex", alignItems: "center", gap: "20px" }}> <DeleteIcon /> Delete</MenuItem>
                      </Menu>
                    </div>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer >
        </section>

        {/* section3 */}
        <section className='bg-[#E9EBF7] lg:h-[100vh] md:p-[20px] sm:p-[24px] md:h-[80vh]'>
          <div className=' lg:pt-[120px] lg:pl-[136px] flex flex-col items-start'>
            <h1 className='text-[40px] font-[900] pb-[30px]'>Модули для детей</h1>

            <div className='flex sm:flex-wrap md:flex-nowrap sm:gap-[10px]'>
              <div className='flex flex-col items-start'>
                <img src="src/assets/img/Rectangle 13.png" alt="" />
                <h2 className='text-[18px] font-[800] ml-[30px]'>Формируем <br></br>правильную речь</h2>
              </div>
              <div className='flex flex-col items-start'>
                <img src="src/assets/img/Rectangle 13.png" alt="" />
                <h2 className='text-[18px] font-[800] ml-[35px]'>Коррекция <br></br> речи</h2>
              </div>
              <div className='flex flex-col items-start'>
                <img src="src/assets/img/Rectangle 13.png" alt="" />
                <h2 className='text-[18px] font-[800] ml-[35px]'>Открытие потенциала <br></br>Вашего ребенка</h2>
              </div>
            </div>
          </div>
        </section>

        {/* section4 */}
        <section className='lg:mt-[-140px] md:mt-[-130px]'>
          <div id="sec4" className='p-[55px] flex flex-col gap-[15px] lg:w-[80%]'>
            <h1 className='lg:text-[40px] text-white font-[900] md:text-[22px]'>Вступите в white-лист, и вы получите 4 бесплатных занятия в числе первых пользователей бесплатно!</h1>
            <div className='flex justify-between'>
              <div className='flex items-center gap-[13px]'>
                <ButtonBase sx={{ color: "white", padding: "8px", paddingLeft: "50px", paddingRight: "50px", border: "1px solid #FF00D6", fontSize: "20px", fontWeight: "700", bgcolor: "#FF00D6", borderRadius: "10px" }}>Вступить</ButtonBase>
                <p className='text-white lg:block sm:hidden md:block lg:w-[196px] md:-[120px]'>Количество мест <span className='font-[800]'>ограничено</span>!</p>
              </div>
              <img src="src/assets/img/faq-shape 1.png" className="lg:block md:hidden sm:hidden w-[20%] relative bottom-[-26.5px]" />
            </div>
          </div>
        </section>



        {/* section */}
        <section>
          <div className='flex justify-between lg:py-[80px] items-center lg:px-[136px] md:px-[25px] md:py-[50px] sm:px-[12px] sm:py-[20px] sm:flex-wrap md:flex-nowrap sm:gap-[20px]'>
            <h1 className='font-[900] lg:text-[40px] md:text-[24px] sm:text-[32px]'>Немного наглядности</h1>
            <div className='flex items-center gap-[10px] lg:w-[420px] md:w-[220px] lg:text-[18px] md:text-[14px]'>
              <img src="src/assets/log/shape-7 1.png" alt="" />
              <p>Посмотрите 3-минутное видео, чтобы лучше понять как это работает</p>
            </div>
          </div>
          <img src="src/assets/img/video.png" className="block m-[auto] pb-[50px]" />
        </section>


        {/* section 5 */}
        <section className='bg-[#E9EBF7] lg:h-[175vh] md:h-[265vh] lg:px-[180px] lg:py-[120px] sm:px-[12px] sm:py-[24px]'>
          <h2 className='lg:text-[40px] sm:text-[20px] font-[900]'>Исследование показало, что каждый 4 ребёнок в возрасте от 3 до 12 лет имеет проблемы в речи, влияющие на его будущее</h2>
          <div className='flex justify-center flex-wrap gap-[30px] mt-[50px]' >
            <Card1 img={"src/assets/comp/Group 60.png"} h1={"Стоимость"} p={"Логопедия стоит дорого, и цена вполне оправдана. В нашем случае - помощник Inno Lingvo предлагает Вам оплачивать сервис по занятиям слогопедом в 2 раза ниже минимальной цены консультации"} sp={"Подробнее о преимуществах"} str={"src/assets/comp/Group (9).png"} />
            <Card1 img={"src/assets/comp/Group 61 (2).png"} h1={"Стоимость"} p={"Логопедия стоит дорого, и цена вполне оправдана. В нашем случае - помощник Inno Lingvo предлагает Вам оплачивать сервис по занятиям слогопедом в 2 раза ниже минимальной цены консультации"} sp={"Подробнее о преимуществах"} str={"src/assets/comp/Group (9).png"} />
            <Card1 img={"src/assets/comp/Group 59.png"} h1={"Стоимость"} p={"Логопедия стоит дорого, и цена вполне оправдана. В нашем случае - помощник Inno Lingvo предлагает Вам оплачивать сервис по занятиям слогопедом в 2 раза ниже минимальной цены консультации"} sp={"Подробнее о преимуществах"} str={"src/assets/comp/Group (9).png"} />
            <Card1 img={"src/assets/comp/Group 62.png"} h1={"Стоимость"} p={"Логопедия стоит дорого, и цена вполне оправдана. В нашем случае - помощник Inno Lingvo предлагает Вам оплачивать сервис по занятиям слогопедом в 2 раза ниже минимальной цены консультации"} sp={"Подробнее о преимуществах"} str={"src/assets/comp/Group (9).png"} />
          </div>
        </section>

        {/* section 6 */}
        <section className='lg:mt-[-140px] md:mt-[-130px]'>
          <div id="sec5" className='lg:p-[150px] md:p-[60px] flex flex-col gap-[25px] lg:w-[80%] sm:p-[24px] sm:pb-[40px]'>
            <h1 className='lg:text-[40px] text-white font-[900] md:text-[22px]'>Хотите быть первыми? Запишитесь!</h1>
            <div className='lg:flex items-center gap-[50px] sm:flex-wrap md:flex-wrap lg:flex-nowrap'>
              <ButtonBase sx={{ color: "white", padding: "8px", paddingLeft: "50px", paddingRight: "50px", border: "1px solid #FF00D6", fontSize: "20px", fontWeight: "700", bgcolor: "#FF00D6", borderRadius: "10px" }}>Записаться</ButtonBase>
              <p className='text-white'>Мы открыли возможность для новых клиентов попробовать сервис в течение месяца бесплатно. Вам стоит просто оставить свой email в указанной форме. Мы обещаем — никакой рекламы и спама, только письмо по существу открытия сервиса</p>
            </div>
          </div>
        </section>



        {/* footer */}
        <footer className='h-[20vh]'>
          <div className='flex justify-between sm:flex-wrap md:flex-nowrap sm:gap-[20px] md:py-[50px] lg:px-[180px] lg:py-[120px] sm:px-[15px] sm:py-[24px]'>

            <div className='flex items-center lg:gap-[20px] md:gap-[5px] sm:gap-[20px]'>
              <img src="src/assets/log/inst.png" alt="" />
              <img src="src/assets/log/fb.png" alt="" />
              <img src="src/assets/log/inst.png" alt="" />
            </div>
            <div className='lg:text-center text-[#535353] md:text-[12px] md:text-center lg:text-[16px]'>
              <h1>© Inno Lingvo, 2019-2022</h1>
              <a href="https://www.flaticon.com/ru/" className='text-[#6E8BF8]'>Политика конфиденциальности</a>
            </div>
            <div className='lg:text-end md:text-[12px] md:text-end  lg:text-[16px]'>
              <h1>Москва, Болотниковская ул. 31</h1>
              <h2>il@innolingvo.ru</h2>
            </div>
          </div>
        </footer>


      </div>
    </>
  )
}

export default App
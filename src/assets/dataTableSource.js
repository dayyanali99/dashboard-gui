export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
  
    {
      field: "age",
      headerName: "Age",
      width: 100,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];

export const userRows = [
    {
      id: 1,
      username: "Varda",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "active",
      email: "varda@gmail.com",
      age: 35,
    },
    {
      id: 2,
      username: "Illuvatar",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "eru@gmail.com",
      status: "passive",
      age: 42,
    },
    {
      id: 3,
      username: "Feanor",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "feanor@gmail.com",
      status: "pending",
      age: 45,
    },
    {
      id: 4,
      username: "Sauron",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "sauron@gmail.com",
      status: "active",
      age: 16,
    },
    {
      id: 5,
      username: "Melkor",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "morgothgmail.com",
      status: "passive",
      age: 22,
    },
    {
      id: 6,
      username: "Elbereth",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "elba@gmail.com",
      status: "active",
      age: 15,
    },
    {
      id: 7,
      username: "Varda",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "starlight@gmail.com",
      status: "passive",
      age: 44,
    },
    {
      id: 8,
      username: "Nenna",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "treenor@gmail.com",
      status: "active",
      age: 36,
    },
    {
      id: 9,
      username: "Yavanna",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "yavanna@gmail.com",
      status: "pending",
      age: 65,
    },
    {
      id: 10,
      username: "Ulmo",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "seaking@gmail.com",
      status: "active",
      age: 65,
    },
  ];
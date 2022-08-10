import { useEffect, useState } from "react";
import axios from "axios";

const ClientePerfil = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = (id) => {
    axios
      .get(`http://localhost:3000/products`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));

    /*   axios
      .post("https://reqres.in/api/articles", article)
      .then((response) => setArticleId(response.data.id))
      .catch((err) => {
        console.log(err);
      }); */
  };

  return (
    <div style={{ padding: "20px" }} className="Title">
      <div>Perfil</div>
      {data && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {data.map((usuario, index) => (
            <div
              className="card-prueba"
              style={{
                width: "300px",
                backgroundColor: "white",
                paddingBottom: "10px",
                borderRadius: "15px",
                boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
                marginBottom: "35px",
              }}
            >
              <img
                style={{
                  objectFit: "cover",
                  width: "100%",
                  borderTopLeftRadius: "15px",
                  borderTopRightRadius: "15px",
                  height: "150px",
                }}
                key={index}
                src={usuario.image}
              />
              <h4 style={{ marginTop: "20px", marginLeft: "10px" }}>
                <b>Nombre : </b> {usuario.name}
              </h4>
              <h4
                style={{
                  marginTop: "20px",
                  marginLeft: "10px",
                  marginBottom: "20px",
                }}
              >
                <b>Precio : </b> {usuario.price}
              </h4>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ClientePerfil;

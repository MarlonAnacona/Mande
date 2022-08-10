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
    <div style={{ padding: "20px" }} className="container">
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

      <div className="main-body">
        <section className="row gutters-sm w-100vh">
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body ">
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                    alt="Admin"
                    className="rounded-circle"
                    width="150"
                  />
                  <div className="mt-3">
                    <h4>John Doe</h4>
                    <p className="text-secondary mb-1">Full Stack Developer</p>
                    <p className="text-muted font-size-sm">
                      Bay Area, San Francisco, CA
                    </p>

                    <div className="d-flex flex-row justify-content-between">
                      <button className="btn btn-primary">Follow</button>
                      <button className="btn btn-outline-primary">
                        Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-8">
            <div class="card mb-3">
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Nombre completo</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">Kenneth Valdez</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Correo electronico</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">fip@jukmuh.al</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Telefono</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">(239) 816-9029</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Tipo de documento</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">(320) 380-4539</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Numero de documento</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    Bay Area, San Francisco, CA
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Direccion</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    Bay Area, San Francisco, CA
                  </div>
                </div>
                {/*  <hr />
                <div class="row">
                  <div class="col-sm-12">
                    <a
                      class="btn btn-info "
                      target="__blank"
                      href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills"
                    >
                      Edit
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ClientePerfil;

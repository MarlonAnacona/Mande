import { useEffect, useState } from "react";

const ClientePerfil = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const userData = localStorage.getItem("userData");

    if (userData) {
      const object = JSON.parse(userData);
      setData(object[0]);
    }
  };

  return (
    <div style={{ padding: "20px" }} className="container">
      {data && (
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
                      <h4>
                        {data.nombre} {data.apellido}
                      </h4>
                      <p className="text-secondary mb-1">{data.email}</p>
                      <p className="text-muted font-size-sm">{data.telefono}</p>

                      {/*       <div className="d-flex flex-row justify-content-between">
                        <button className="btn btn-primary">Follow</button>
                        <button className="btn btn-outline-primary">
                          Message
                        </button>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Nombre completo</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {data.nombre} {data.apellido}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Correo electronico</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">{data.email}</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Telefono</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {data.telefono}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Tipo de documento</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {data.tipo_documento}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Numero de documento</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {data.numero_documento}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Direccion</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {data.direccion}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default ClientePerfil;

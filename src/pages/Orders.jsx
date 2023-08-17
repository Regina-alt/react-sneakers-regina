import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

/* components */
import Card from "../components/Card";
import { Info } from "../components/Info";

function Orders() {
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  /* button back */
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("react-sneakers-regina/");
  };

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://64da330be947d30a260af0ac.mockapi.io/orders"
        );
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        alert("Ошибка при загрузке заказов");
      }
    })();
  }, []);

  return (
    <div className="content p-40 ">
      {isLoading ? (
        <>
          <div className="d-flex align-center justify-between mb-40">
            <h1>Мои заказы</h1>
          </div>
          <div className="d-flex flex-wrap">
            {[...Array(10)].map((item, index) => (
              <Card key={index} loading={isLoading} {...item} />
            ))}
          </div>
        </>
      ) : (
        <>
          {orders.length == 0 ? (
            <div className="Info p-50">
              <Info
                title={"У вас нет заказов"}
                description={"Оформите хотя бы один заказ."}
                image={"img/sad-face.png"}
                action={handleClick}
              />
            </div>
          ) : (
            <>
              <div className="d-flex align-center justify-between mb-40">
                <h1>Мои заказы</h1>
              </div>
              <div className="d-flex flex-wrap">
                {orders.map((item, index) => (
                  <Card key={index} loading={isLoading} {...item} />
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Orders;

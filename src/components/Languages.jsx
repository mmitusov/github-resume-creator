import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const Languages = ({prop}) => {
  const [languages, setLanguages] = useState({})
  const [sum, setSum] = useState(0)
  useEffect(() => {
    (async () => { //Почему то самовызывающееся функция не работает без useEffect/вне useEffect?
      try {
        let langObj = {};
        let sumValues;
        const response = await fetch(`https://api.github.com/users/${prop.login}/repos`);
        const data = await response.json();
        for (let user of data) if (user.language !== null) {langObj[user.language] = langObj[user.language]+1 || 1};
        sumValues = Object.values(langObj).reduce((acc, curr) => acc + curr, 0)
        setLanguages(langObj)
        setSum(sumValues)
      } catch(err) {
        console.log(err)
      }
    })()
  }, []);
  // //Another working option - без использования useEffect. Но так мы можем застрять в вечном рендере - новый рендер -> фетч -> setState -> новый рендер -> фетч...
  // //Но самовызывающиеся функции тригеряться только один раз (вроде как).
  // const a = async () => {
  //   try {
  //     let langObj = {};
  //     let sumValues;
  //     const response = await fetch(`https://api.github.com/users/${prop.login}/repos`);
  //     const data = await response.json();
  //     for (let user of data) if (user.language !== null) {langObj[user.language] = langObj[user.language]+1 || 1};
  //     sumValues = Object.values(langObj).reduce((acc, curr) => acc + curr, 0)
  //     setLanguages(langObj)
  //     setSum(sumValues)
  //   } catch(err) {
  //     console.log(err)
  //   }
  // }
  // a()

  //Не рабочая попытка #1 - Чтобы отобразить инфу которую мы зафетчили - нужно спровоцировать перерендер страницы с теми данными, что мы с задержкой получили с сервера
  //Для перерендера как минимум нужно воспользоваться useState и поместить туду полученные данные. И изменение стейта как раз таки и спровоцирует перерендер страницы
  // let langObj = {};
  // let sumValues;
  // (async () => {
  //   try {
  //     const response = await fetch(`https://api.github.com/users/${prop.login}/repos`);
  //     const data = await response.json();
  //     for (let user of data) if (user.language !== null) {langObj[user.language] = langObj[user.language]+1 || 1}; //Отсеиваю нужную инфу
  //     sumValues = Object.values(langObj).reduce((acc, curr) => acc + curr, 0); //Общая сумма нужной инфы
  //     console.log('langObj', langObj)
  //     console.log('sumValues', sumValues)
  //   } catch(err) {
  //     console.log(err)
  //   }
  // })()

  //Не рабочая попытка #2 - Пытался циклично обновить стейт setLanguages - но не вышло. Стейт обновляется но с неправильными данными. Без useEffect можно застрять в вечном ре-рендере
  // const [languages, setLanguages] = useState([])
  // fetch(`https://api.github.com/users/${prop.login}/repos`)
  //     .then(response => response.json())
  //     .then(data => {for (let user of data) setLanguages(...languages, user.language)});
  // console.log(languages)

  //P.S. Более простые примеры использования и обработки асинхронных запросов можно найти в файлах: Repositories.jsx и Organizations.jsx

  return (
    <Container className='ms-4'>
      <Row className="justify-content-md-center mt-3">
        <Col lg="3">
          <p className="text-start fs-2 fst-italic fw-bold">Languages</p>          
        </Col>
        <Col className="text-start fs-4 fw-normal lh-base">          
          {
          Object.entries(languages).map(([key,value],i) => <span key={i}>{`${key} (${(value/sum*100).toFixed(2)}%) `}</span>)
          // Object.entries(languages).forEach(([key, value]) => <span key={key}> {key} </span>) - не стработало
          }           
        </Col>
      </Row>
      <hr className="dotted me-5"></hr> 
    </Container>
  )
}

export default Languages
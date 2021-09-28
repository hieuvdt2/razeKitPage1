import "./App.css";
import { Button, Layout } from "antd";
import { Typography } from "antd";
import { Avatar } from "antd";
import { Row, Col } from "antd";
import { UserOutlined } from "@ant-design/icons";
const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;

function App() {
  return (
    <div className="App">
      <Layout>
        <Row>
          <Col xs={0} md={24}>
            <Header className="header">
              <Title className="logo" level={5}>
                Logo
              </Title>
              <div className="header-right">
                <ul className="menu">
                  <li>Home
                    <div className="dropdown-content">
                      <a href="#">WORLD NEWS</a>
                      <a href="#">TRAVEL</a>
                      <a href="#">TECHNOLOGY</a>
                      <a href="#">CITY</a>
                      <a href="#">CULTURE</a>
                      <a href="#">MORE…</a>
                    </div>
                  </li>
                  <li>Discovery</li>
                  <li>Photo</li>
                  <li>Contact</li>
                </ul>
                <Avatar size={30} icon={<UserOutlined />} />
              </div>
            </Header>
          </Col>
          {/* mobile */}
          <Col xs={24} md={0}>
            <Header className="header">
              <Row justify="space-between">
                <Col span={8}>
                  <div className="icon-menu" style={{ textAlign: "left" }}>
                    <i class="fa fa-bars" aria-hidden="true"></i>
                  </div>
                </Col>
                <Col span={8} style={{ textAlign: "center" }}>
                  {" "}
                  <Title
                    className="logo"
                    level={5}
                    style={{ display: "inline-block", float: "none" }}
                  >
                    Logo
                  </Title>
                </Col>
                <Col span={8}>
                  <div className="avatar" style={{ textAlign: "right" }}>
                    <Avatar size={30} icon={<UserOutlined />} />
                  </div>
                </Col>
              </Row>
            </Header>
          </Col>
        </Row>
        {/* Content */}
        <Content>
          <section className="news">
            <Row>
              {/* <Col span={16} pull={8}> */}
              <Col xs={24} xl={14} xxl={16}>
                <div className="world-new">
                  < img src="https://i.ibb.co/qnSbrbQ/new-more.png" alt="new-more" className=" world__img" />
                  <div className="world-new__content">
                    <Title className="text-white level2-heading" level={2}>
                      {" "}
                      word new
                    </Title>
                    <Title className="text-white level3-heading" level={3}>
                      {" "}
                      Amazing places in Amarice to visit
                    </Title>
                    <p>
                      For some reason — this country, this city, this
                      neighborhood, this particular street —  is the place you
                      are living a majority of your life in.
                    </p>
                    <Button className="btn">Lean More</Button>
                  </div>
                </div>
              </Col>
              {/* <Col span={8} push={16}> */}
              <Col xs={24} sm={24} md={24} lg={24} xl={10} xxl={8}>
                <div className="more-new">
                  <div className="more-new__content">
                    <Title className="more_new__heading" level={2}>
                      {" "}
                      More New
                      <span className="more-new__icon">
                        <i class="fa fa-angle-left " aria-hidden="true"></i>
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                      </span>
                    </Title>
                    <Row gutter={[20, 0]}>
                      <Col xs={24} xl={24}>
                        <div className="content-new">
                          <Title className="travel__heading" level={3}>
                            {" "}
                            Travel
                          </Title>
                          <Title className="artice__heading" level={4}>
                            {" "}
                            Article title
                          </Title>
                          <p>
                            Lorem ipsum dolor sit amet, ipsum labitur lucilius
                            mel id, ad has appareat…{" "}
                          </p>
                          <div className="time">
                            {" "}
                            <i class="fa fa-clock-o " aria-hidden="true"></i>
                            <span>2 min ago</span>
                          </div>
                        </div>
                      </Col>
                      <Col xs={24} xl={24}>
                        {" "}
                        <div className="content-new">
                          <Title className="technology__heading" level={3}>
                            {" "}
                            TECHNOLOGY
                          </Title>
                          <Title className="artice__heading" level={4}>
                            {" "}
                            Article title
                          </Title>
                          <p>
                            Lorem ipsum dolor sit amet, ipsum labitur lucilius
                            mel id, ad has appareat…{" "}
                          </p>
                          <div className="time">
                            {" "}
                            <i class="fa fa-clock-o" aria-hidden="true"></i>
                            <span>2 min ago</span>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </section>
          {/* Trending */}

          <div className="trending">
            <div className="container">
              <Title level={2} className="more_new__heading">
                Trending
                <span className="more-new__icon">
                  <i class="fa fa-angle-left " aria-hidden="true"></i>
                  <i class="fa fa-angle-right" aria-hidden="true"></i>
                </span>
              </Title>

              <Row style={{ margin: "0 -20px" }}>
                <Col sm={24} md={12} lg={8}>
                  <div className="col-trending">
                    <div className="img-content">
                      <img src="https://i.ibb.co/TbcHmhd/one.png" alt="one" />
                    </div>
                    <div className="text-content">
                      <h3 className="text-content__title">
                        Dolore magna aliqua
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, ipsum labitur lucilius mel
                        id, ad has appareat.{" "}
                      </p>
                      <div className="time">
                        {" "}
                        <i class="fa fa-clock-o" aria-hidden="true"></i>
                        <span>2 min ago</span>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col sm={24} md={12} lg={8}>
                  {" "}
                  <div className="col-trending">
                    <div className="img-content">
                      <img src="https://i.ibb.co/ZxfxBYb/annie.png" alt="annie" />
                    </div>
                    <div className="text-content">
                      <h3 className="text-content__title">
                        Morbi eleifend a libero
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, ipsum labitur lucilius mel
                        id, ad has appareat.
                      </p>
                      <div className="time">
                        {" "}
                        <i class="fa fa-clock-o" aria-hidden="true"></i>
                        <span>2 min ago</span>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col sm={0} md={0} lg={8}>
                  {" "}
                  <div className="col-trending">
                    <div className="img-content">
                      <img src="https://i.ibb.co/n1QXq8L/carlos.png" alt="carlos" />
                    </div>
                    <div className="text-content">
                      <h3 className="text-content__title">
                        Morbi eleifend a libero
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, ipsum labitur lucilius mel
                        id, ad has appareat.
                      </p>
                      <div className="time">
                        {" "}
                        <i class="fa fa-clock-o" aria-hidden="true"></i>
                        <span>2 min ago</span>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>

          {/* Happening now */}

          <div className="happening">
            <div className="container">
              <Title className="more_new__heading" level={2}>
                <span className="more-new__icon">
                  <i class="fa fa-angle-left " aria-hidden="true"></i>
                  <i class="fa fa-angle-right" aria-hidden="true"></i>
                </span>
                HAPPENING NOW
              </Title>

              <Row gutter={[20, 0]}>
                <Col xs={24} xl={16} xxl={16}>
                  {" "}
                  <div className="img-city">
                    <img src="https://i.ibb.co/crdgn7L/Image.png" alt="Image" />
                    <Title className="title-city" level={3}>
                      City
                    </Title>
                    <div className="content-large">
                      <Title className="title-large">Large article title</Title>
                      <p>
                        Lorem ipsum dolor sit amet, in eam odio amet, vix id
                        nullam detracto, vidit vituperatoribus duo id. Affert
                        detraxit voluptatum vis eu, inermis eloquentiam.
                      </p>
                      <div className="time">
                        {" "}
                        <i class="fa fa-clock-o" aria-hidden="true"></i>
                        <span>2 min ago</span>
                      </div>
                    </div>
                  </div>
                  <div className="img-city">
                    <img src="https://i.ibb.co/nnt5dzW/tree.png" alt="tree" />
                    <Title className="title-city" level={3}>
                      City
                    </Title>
                    <div className="content-large">
                      <Title className="title-large">Large article title</Title>
                      <p>
                        Lorem ipsum dolor sit amet, in eam odio amet, vix id
                        nullam detracto, vidit vituperatoribus duo id. Affert
                        detraxit voluptatum vis eu, inermis eloquentiam.
                      </p>
                      <div className="time">
                        {" "}
                        <i class="fa fa-clock-o" aria-hidden="true"></i>
                        <span>2 min ago</span>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xs={24} xl={8} xxl={8}>
                  <Row gutter={[38, 0]}>
                    <Col xs={24} xl={24}>
                      {" "}
                      <div className="happending-ringht">
                        <img src="https://i.ibb.co/PGF3PF2/gau.png" alt="gau" />
                        <Title className="small-title">Smaill title</Title>
                        <div className="time">
                          {" "}
                          <i class="fa fa-clock-o" aria-hidden="true"></i>
                          <span>
                            3h ago by <ins>Worldnews</ins>
                          </span>
                        </div>
                      </div>
                    </Col>
                    <Col xs={24} xl={24}>
                      {" "}
                      <div className="happending-ringht">
                        <img src="https://i.ibb.co/GR1bVgJ/bird.png" alt="bird" />
                        <Title className="small-title">Smaill title</Title>
                        <div className="time">
                          {" "}
                          <i class="fa fa-clock-o" aria-hidden="true"></i>
                          <span>
                            3h ago by <ins>Worldnews</ins>
                          </span>
                        </div>
                      </div>
                    </Col>
                    <Col xs={24} xl={24}>
                      <div className="happending-ringht">
                        <img src="https://i.ibb.co/X21qDTF/river.png" alt="river"
                        />
                        <Title className="small-title">Smaill title</Title>
                        <div className="time">
                          {" "}
                          <i class="fa fa-clock-o" aria-hidden="true"></i>
                          <span>
                            3h ago by <ins>Worldnews</ins>
                          </span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>

            <div className="img-travel"></div>
          </div>
        </Content>
        <Footer className="footer">
          <div className="container">
            <Row gutter={[20, 20]}>
              <Col xs={12} xl={2}>
                {" "}
                <Title level={2} className="title-logo">
                  Logo
                </Title>{" "}
              </Col>
              <Col xs={12} xl={6}>
                {" "}
                <div className="footer-menu">
                  <ul className="footer-ul">
                    <li>Home</li>
                    <li>Discovery</li>
                    <li>Photos</li>
                    <li>Contact</li>
                  </ul>{" "}
                  <ul className="footer-ul">
                    <li>About</li>
                    <li>Help</li>
                    <li>Teams</li>
                    <li>Guidlines</li>
                  </ul>
                  <ul className="footer-ul">
                    <li>Testimonials</li>
                    <li>Advertise</li>
                    <li>Integrations</li>
                    <li>Careers</li>
                  </ul>
                </div>
              </Col>
              <Col xs={12} xl={12}>
                {" "}
                <div className="footer-email">
                  <fo rm className="footer-form">
                    <input
                      type="text"
                      placeholder="Email"
                      id="fname"
                      name="fname"
                    />
                    <button className="form-btn">
                      <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
                    </button>
                  </fo>
                  <p>Stay in touch with us for the freshest products!</p>
                </div>
              </Col>
              <Col xs={12} xl={4}>
                <div className="footer-icon">
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                  <i class="fa fa-globe" aria-hidden="true"></i>
                </div>
              </Col>
            </Row>
          </div>
        </Footer>
      </Layout>
    </div>
  );
}

export default App;

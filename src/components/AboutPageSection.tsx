import { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function AboutFunction() {
    return (
        <Fragment>
			<Container className="about-section">
				<Row>
					<Col><h1>About Ductastic</h1></Col>
				</Row>
				<Row>
					<Col md={12} lg={6}><img className="about-img" src="assets/images/GiantRubberDuck.webp" width={558} height={518} alt="Giant rubber duck"></img></Col>
					<Col>
					<h6 style={{ fontSize: '30px' }}>Hi there duck lover!</h6>
					<p>Welcome to Ducktastic, the most ducking awesome online store for rubber ducks 
							and rubber duck related artefacts. We are John and Jane, a pair of duck fanatics who started this business 
							out of our quacking love and passion for all things duck. We have always been in awe of the splendid world of ducks, from their flashy feathers to their calming quacks. 
							We wanted to share our delight with the world, and what better way than through rubber ducks? Rubber ducks are not only fun and cute, but also versatile and durable. You can use them as toys, 
							decorations, collectibles, gifts, or even as stress relievers. They can make any space more fun and 
							festive with their charming presence.</p>
						<br />
						<p>
							We have a massive collection of rubber ducks and rubber duck related artefacts for you to choose from. 
							Whether you are looking for classic yellow ducks, themed ducks, giant ducks, mini ducks, 
							or even custom-made ducks, we have them all. We also have duck mugs, duck pillows, duck keychains, 
							duck stickers, duck posters, and more.
						</p>
						<br />
						<p>
							Our mission is to provide you with the best quality products at the best prices. 
							We source our products from trustworthy suppliers and manufacturers who share our values and standards. 
							We also offer fast and secure shipping, easy returns and exchanges, and friendly customer service. 
							We hope you have a ducky time browsing our webstore and finding your dream rubber duck. 
							Thank you for choosing Ducktastic, where every day is a duck day!
						</p>
						<br/>
						<p>
							P.S. If you have any questions or feedback, please don't hesitate to contact us. 
							We'd love to hear from you. Just don't ask us why the chicken crossed the road. 
							We only know about ducks.
						</p>
                        <a style={{color: "#ED5A00" }} href="https://en.wikipedia.org/wiki/Rubber_duck">Read more about rubber ducks</a>
					</Col>
				</Row>
			</Container>
        </Fragment>
    )
}
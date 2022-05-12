import Button from '../components/Button'
import Container from '../components/Container'
import Col from '../components/Col'
import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph'
import Row from '../components/Row'
import Section from '../components/Section'

import Image from 'next/Image'

const Showcase = () => {
    return <Section>
        <Container>
            <Row>
                <Col xs="4" sm="4" md="3">
                    <Image
                        src={`/images/led-zeppelin-ii.jpg`}
                        alt="Led Zepellin II"
                        width={300}
                        height={300}
                    />
                </Col>
                <Col xs="8" sm="8" md="9" flexDirection="column" justifyContent="center">
                    <Heading level="1" marginBottom="1">
                        Listening is everything.
                    </Heading>
                    <Paragraph marginBottom="1">
                        Millions of songs and podcasts. No credit card needed.
                    </Paragraph>
                    <Button 
                    label="Get Spotify Free" 
                    type="primary"
                    path="/download"
                    />
                </Col>
            </Row>
        </Container>
    </Section>
}
export default Showcase
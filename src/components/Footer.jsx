import { Facebook, Instagram, MailOutlined, Phone, Room, Twitter, YouTube } from "@material-ui/icons";
import styled from "styled-components"
import {mobile} from "../responsive"

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1`
    
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;  

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem =styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return <Container>
        <Left>
            <Logo>Shopping Application</Logo>
            <Desc>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Veniam cum expedita optio laborum beatae modi cumque neque inventore. 
                Consequuntur fugit ipsum laboriosam molestiae quod omnis, eum quis pariatur rem eaque.
            </Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <YouTube/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Women Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>Child's Play</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>

            <Title>Contact</Title>
            <ContactItem>
                <Room style={{marginRight:"10px"}}/> 1500 Banthai Soi ChanMueng 16 Bacgkok 10400
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:"10px"}}/> 0949804453
            </ContactItem>
            <ContactItem>
                <MailOutlined style={{marginRight:"10px"}}/> nuk123475@gmail.com
            </ContactItem>
            <Payment src="https://user-images.githubusercontent.com/52581/44384465-5e312780-a570-11e8-9336-7b54978a9e64.png" />
        </Right>
    </Container>
};

export default Footer;
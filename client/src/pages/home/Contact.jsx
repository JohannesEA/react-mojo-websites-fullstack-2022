import styled from "styled-components";
import { useState } from "react";
import Button from "../../components/Button";
import { send } from "emailjs-com";
import Title from "../../components/Title";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import LoadingAnimation from "../../components/LoadingAnimation";

const Contact = () => {
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState("");

  //Request message state => the userrequest that will get validated and sent to our mailbox
  const [requestMessage, setRequestMessage] = useState({
    email: "",
    phonenumber: "",
    title: "",
    message: "",
  });

  const validation = (email, phonenumber, title, message) => {
    if (email !== "" && phonenumber !== "" && title !== "" && message !== "") {
      return true;
    } else {
      return false;
    }
  };

  const handleSendRequest = (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (
      validation(
        requestMessage.email,
        requestMessage.phonenumber,
        requestMessage.title,
        requestMessage.message
      )
    ) {
      send(
        "service_d92dhff",
        "template_qlfe9vt",
        requestMessage,
        "user_nXc7ccykjAkWk2linJAyS"
      ).then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          setErrorMessage("");
          setIsLoading(false);
          setConfirmationMessage(
            "Takk for at du ønsker å komme i kontakt med oss. Vi svarer så fort vi kan."
          );
        },
        function (error) {
          console.log("FAILED...", error);
          setErrorMessage("Noe gikk galt.");
          setIsLoading(false);
        }
      );
    } else {
      setErrorMessage("Alle felt må være fylt ut. Prøv igjen.");
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setRequestMessage({ ...requestMessage, [e.target.name]: e.target.value });
  };

  return (
    <Container id="contact">
      <Title text="Kontakt" color="color-2" data-aos="fade-up"></Title>

      <ContactForm
        data-aos="fade-up"
        name="myForm"
        onSubmit={handleSendRequest}
      >
        <ContactInfoContainer>
          <IconBox>
            <AiOutlinePhone color="black" fontSize={20} />
            <Text>+47 99509035</Text>
          </IconBox>
          <IconBox>
            <AiOutlineMail color="black" fontSize={20} />
            <Text>mojo-websites1@gmail.com</Text>
          </IconBox>
        </ContactInfoContainer>
        {/* <Label>Email</Label> */}
        <Input
          type="text"
          placeholder="Epost"
          name="email"
          onChange={(e) => handleChange(e)}
        />
        {/* <ErrorMessage>{messageState.email}</ErrorMessage> */}

        <Input
          type="text"
          placeholder="Mobilnummer"
          name="phonenumber"
          onChange={(e) => handleChange(e)}
        />
        {/* <ErrorMessage>{messageState.phonenumber}</ErrorMessage> */}

        <Input
          type="text"
          placeholder="Tittel"
          name="title"
          onChange={(e) => handleChange(e)}
        />
        {/* <ErrorMessage>{messageState.title}</ErrorMessage> */}

        <TextArea
          type="text"
          placeholder="Melding"
          name="message"
          onChange={(e) => handleChange(e)}
        />
        {/* <ErrorMessage>{messageState.message}</ErrorMessage> */}

        <Button
          text="Send"
          bc="color-2"
          btnOnClick={handleSendRequest}
        ></Button>
        {isLoading && <LoadingAnimation />}
        {confirmationMessage.length > 0 && (
          <ConfirmationMessage>{confirmationMessage}</ConfirmationMessage>
        )}

        {errorMessage.length > 0 && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </ContactForm>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease;
  left: 0;
  right: 0;
  width: 100%;
  height: auto;
  margin-top: 3em;

  @media (max-width: 800px) {
    flex-direction: column;
    height: auto;
  }
`;

const ContactForm = styled.form`
  flex: 1;
  flex-direction: column;
  text-align: center;
  border-radius: 1em;
  padding: 1em 1em .5em 1em;
  background-color: #fff;
  box-shadow: 0px 0px 4px 2px var(--color-hover);
  width: 80%;
`;

// const Label = styled.label`
//   /* align-self: flex-start; */
//   font-size: 20px;
//   color: black;
// `;

const Input = styled.input`
  flex: 1;
  padding: 5px;
  min-height: 4em;
  width: 100%;
  font-size: 1.2rem;
  border: none;
  border-bottom: 1px solid #e1f5ff;
`;

const TextArea = styled.textarea`
  flex: 1;
  border: none;
  padding: 5px;
  width: 100%;
  max-width: 100%;
  font-size: 1.2rem;
  min-height: 10em;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const ErrorMessage = styled.p`
  font-size: 1.2rem;
  color: red;
`;
const ConfirmationMessage = styled.p`
  font-size: 1.2rem;
  color: #032859;
`;

const Text = styled.p`
  font-size: 1.2rem;
  margin-left: 0.5em;
`;

const ContactInfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const IconBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

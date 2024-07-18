import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Avatar,
  Badge,
  Button,
  Container,
  FormControl,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  VStack,
  useDisclosure,
  Text
} from "@chakra-ui/react";
import { FaEdit } from "react-icons/fa";
import { useFirebase } from "../Firebase";
import { db } from "../Firebase";
import { ref, onValue } from "firebase/database";

export default function Profile() {
    const { uid } = useParams();
    const imageRef = useRef(null);
    const firebase = useFirebase();
    const user = firebase.user;
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [userDetails, setUserDetails] = useState(null);
    const navigate = useNavigate();

    const [image, setImage] = useState(null);
    const [name, setName] = useState("");

    const handleImagePreview = () => {
        imageRef.current.click();
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        firebase.updateUserData(userDetails, name, image);
        onClose(); // Close the modal after form submission
    };

    useEffect(() => {
        if (!firebase.isSignedIn) {
            navigate('/login'); // Redirect to login if user is not signed in
        } else {
            onValue(ref(db, `users/${uid}`), (snapshot) => {
                setUserDetails(snapshot.val());
            });
        }
    }, [firebase.isSignedIn, navigate, uid]);

    return (
        <>
            <Container maxW={"container.xl"} p={[10, 20]}>
                <VStack
                    direction={["column", "row"]}
                    gap={[10, 20]}
                    alignItems={"center"}
                >
                    <Avatar
                        src={userDetails?.photoURL}
                        size={"2xl"}
                        name={userDetails?.name}
                        alt="Profile"
                    />
                    <VStack
                        justify={"space-evenly"}
                        alignItems={["center", "flex-start"]}
                        my={"auto"}
                        gap={5}
                    >
                        <Heading
                            fontFamily={"'Libre Baskerville', serif"}
                            textTransform={"capitalize"}
                            fontSize={["xl", "4xl"]}
                        >
                            {userDetails?.name || "Guest User"}
                        </Heading>
                        <Text fontFamily={"'Inter', sans-serif"} textAlign={"center"}>
                            {userDetails?.email}{" "}
                            <Badge colorScheme={user?.emailVerified ? "green" : "red"}>
                                {user?.emailVerified ? "Verified" : "Not verified"}
                            </Badge>{" "}
                        </Text>
                        <Button
                            bgColor={"#658C4A"}
                            color={"white"}
                            _hover={{ bgColor: "rgba(101, 140, 74, 0.9)" }}
                            onClick={onOpen}
                            _focusVisible={{ outline: "none" }}
                        >
                            <FaEdit /> &nbsp; Edit Profile
                        </Button>
                    </VStack>
                </VStack>
            </Container>

            <Modal isOpen={isOpen} isCentered size={["xs", "lg"]} onClose={onClose}>
                <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="5px" />
                <ModalContent>
                    <ModalCloseButton
                        _focusVisible={{ outline: "none" }}
                        onClick={() => {
                            setImage(null);
                            setName("");
                            onClose();
                        }}
                    />
                    <ModalBody
                        boxShadow={"0 0 20px gray"}
                        borderRadius={"1rem"}
                        background={
                            "linear-gradient(45deg, rgba(231,206,192,1) 0%, rgba(255,255,255,1) 100%)"
                        }
                    >
                        <VStack p={[10, 20]} gap={5} textAlign={"center"}>
                            <form onSubmit={handleFormSubmit}>
                                <FormControl>
                                    <Avatar
                                        size={"2xl"}
                                        onClick={handleImagePreview}
                                        cursor={"pointer"}
                                        pos={"relative"}
                                        src={
                                            image ? URL.createObjectURL(image) : userDetails?.photoURL
                                        }
                                        name={userDetails?.displayName}
                                    >
                                        <FaEdit
                                            size={"2rem"}
                                            color="#222"
                                            style={{
                                                position: "absolute",
                                                bottom: "10px",
                                                right: "5px",
                                            }}
                                        />
                                    </Avatar>
                                    <Input
                                        ref={imageRef}
                                        type={"file"}
                                        accept={"image/*"}
                                        onChange={handleImageChange}
                                        display={"none"}
                                    />
                                </FormControl>
                                <FormControl>
                                    <Input
                                        type={"text"}
                                        placeholder={"Your Name"}
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </FormControl>
                                <Button
                                    type={"submit"}
                                    bgColor={"#658C4A"}
                                    color={"white"}
                                    _hover={{
                                        bgColor: "rgba(101, 140, 74, 0.9)",
                                    }}
                                >
                                    Save Changes
                                </Button>
                            </form>
                        </VStack>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}

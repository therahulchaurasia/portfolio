import CustomButton from "@/components/CustomButton"
import MainLayout from "@/layout/MainLayout"
import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Icon,
  Image,
  Input,
  Spacer,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react"
import Head from "next/head"
import Link from "next/link"
import { CiMenuBurger } from "react-icons/ci"
import { FaArrowLeft } from "react-icons/fa"
import { GiStarShuriken } from "react-icons/gi"
import { HiArrowSmallDown } from "react-icons/hi2"
import { IoMenu } from "react-icons/io5"
import { RxHamburgerMenu } from "react-icons/rx"
import { MotionBox } from "./_app"
import { useFormik } from "formik"
import { object, string } from "yup"
import axios from "axios"

const inputStyles = {
  p: 14,
  rounded: "full",
  border: "none",
  cursor: "none",
  bg: "rgb(31, 31, 31)",
}
const emailRegex =
  /^([A-Z0-9_+-]+\.?)*[A-Z0-9_+-]@([A-Z0-9][A-Z0-9-]*\.)+[A-Z]{2,}$/i

export default function Home() {
  const validationSchema = object().shape({
    name: string()
      .required("Required")
      .min(2)
      .test(
        "len",
        "First name must be at least 2 characters",
        (val) => val.trim().length >= 2
      )
      .label("First name"),
    email: string()
      .email()
      .matches(emailRegex, "Invalid Email")
      .required("Required")
      .label("Email"),
    description: string()
      .required("Required")
      .min(4)
      .test(
        "len",
        "Description must be at least 4 characters",
        (val) => val.trim().length >= 2
      )
      .label("Description"),
  })
  const {
    values,
    errors,
    touched,
    isSubmitting,
    setSubmitting,
    resetForm,
    handleSubmit,
    handleChange,
    handleBlur,
    ...formik
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      description: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      sendEmail()
    },
  })

  const sendEmail = async () => {
    try {
      const response = await axios.get("/api/send")
      console.log(response)
      resetForm()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout bg={"brand.100"} color={"brand.300"}>
        <HStack h={28} mb={20}>
          <Heading fontSize={"3xl"} fontWeight={"extrabold"}>
            HY
          </Heading>
          <Spacer />
          <Icon as={RxHamburgerMenu} boxSize={"9"}></Icon>
        </HStack>
        <Flex alignItems={"center"} gap={4} mb={8}>
          <Text display={"inline"} fontSize={"xl"}>
            01//04 -{" "}
            <Text as={"span"} textTransform={"uppercase"}>
              Scroll
            </Text>{" "}
          </Text>
          <Icon
            as={HiArrowSmallDown}
            boxSize={"5"}
            _hover={{
              transition: "all 0.2s ease-out",
              transform: "rotate(180deg)",
            }}
          />
        </Flex>
        <Stack spacing={8}>
          <Flex flexDirection={"column"}>
            <Text
              fontSize={"6xl"}
              textTransform={"uppercase"}
              fontWeight={"black"}
              mx={"auto"}
              display={"inline-block"}
              mb={-5}
            >
              Full
            </Text>
            <Text
              fontSize={"6xl"}
              textTransform={"uppercase"}
              fontWeight={"black"}
              mx={"auto"}
              mb={-5}
            >
              Stack
            </Text>
            <Text
              fontSize={"6xl"}
              textTransform={"uppercase"}
              fontWeight={"black"}
              mx={"auto"}
            >
              Developer
            </Text>
          </Flex>
          <Text textAlign={"center"} mx={"auto"} fontSize={"xl"} mb={16}>
            EXPLORING BOUNDLESS CREATIVITY, I SOLVE PROBLEMS WITH PASSION,
            FUELED BY DESIGN.
          </Text>
          <CustomButton
            borderColor={"brand.300"}
            bg={"transparent"}
            color={"brand.300"}
            _hover={{
              bg: "brand.300",
              color: "brand.100",
            }}
            p={10}
          >
            <Icon as={HiArrowSmallDown} boxSize={"10"} />
          </CustomButton>
        </Stack>
      </MainLayout>
      <MainLayout bg={"brand.200"}>
        <Stack spacing={14}>
          <Box bg={"brand.200"} color={"brand.100"}>
            <HStack
              h={28}
              mb={20}
              borderBottom={"1px solid"}
              borderColor={"brand.100"}
              fontSize={"lg"}
              textTransform={"uppercase"}
            >
              <Text>02/</Text>
              <Spacer />
              <Text>About</Text>
              <Spacer />

              <Text>/04</Text>
            </HStack>
            <Stack spacing={8}>
              <Text textAlign={"center"} mx={"auto"} fontSize={"xl"}>
                HELLO, MY NAME IS T, A CREATIVE ENTHUSIAST DRIVEN BY CURIOSITY,
                DESIGN, AND PROBLEM-SOLVING.
              </Text>
              <Box h={"500px"} w={"300px"} mx={"auto"}>
                <Image
                  src="https://source.unsplash.com/random/300x500"
                  alt="random placeholder"
                  objectFit={"cover"}
                  maxW={"100%"}
                  maxH={"100%"}
                />
              </Box>
              <CustomButton
                borderColor={"brand.100"}
                bg={"transparent"}
                color={"brand.100"}
                _hover={{
                  bg: "brand.100",
                  color: "brand.300",
                  borderColor: "brand.100",
                  fontWeight: "extrabold",
                }}
              >
                Learn <br /> More
              </CustomButton>
            </Stack>
          </Box>
          <Box bg={"brand.200"} color={"brand.100"}>
            <HStack
              h={28}
              mb={20}
              borderBottom={"1px solid"}
              borderColor={"brand.100"}
              fontSize={"lg"}
              textTransform={"uppercase"}
            >
              <Text>03/</Text>
              <Spacer />
              <Text>Projects</Text>
              <Spacer />
              <Text>/04</Text>
            </HStack>
            <Stack spacing={8}>
              <Text textAlign={"center"} mx={"auto"} fontSize={"xl"}>
                HERE ARE A FEW SELECTED PROJECTS THAT DEMONSTRATE MY PASSION FOR
                CREATING MEMORABLE WEBSITES AND MOBILE APPS.
              </Text>
              {/* <Box h={"500px"} w={"300px"} mx={"auto"}>
            <Image
              src="https://source.unsplash.com/random/300x500"
              alt="random placeholder"
              objectFit={"cover"}
              maxW={"100%"}
              maxH={"100%"}
            />
          </Box> */}
              <Stack mx={"auto"} textTransform={"uppercase"}>
                <Image
                  src="https://source.unsplash.com/random/400x500"
                  alt="random placeholder"
                  objectFit={"cover"}
                  maxW={"100%"}
                  maxH={"100%"}
                  borderRadius={"3xl"}
                  filter={{ base: "none", md: "brightness(70%)" }}
                  transition={"all 0.3s linear"}
                  _hover={{
                    filter: "brightness(100%)",
                  }}
                />
                <HStack>
                  <Text>GPA Calculate</Text>
                  <Spacer />
                  <Text>SEO</Text>
                </HStack>
                <HStack>
                  <Text>Website Design</Text>
                  <Spacer />
                  <Text>24.10.2023</Text>
                </HStack>
              </Stack>
              <Stack mx={"auto"} textTransform={"uppercase"}>
                <Image
                  src="https://source.unsplash.com/random/400x500"
                  alt="random placeholder"
                  objectFit={"cover"}
                  maxW={"100%"}
                  maxH={"100%"}
                  borderRadius={"3xl"}
                  filter={{ base: "none", md: "brightness(70%)" }}
                  transition={"all 0.3s linear"}
                  _hover={{
                    filter: "brightness(100%)",
                  }}
                />
                <HStack>
                  <Text>GPA Calculate</Text>
                  <Spacer />
                  <Text>SEO</Text>
                </HStack>
                <HStack>
                  <Text>Website Design</Text>
                  <Spacer />
                  <Text>24.10.2023</Text>
                </HStack>
              </Stack>
              <Stack mx={"auto"} textTransform={"uppercase"}>
                <Image
                  src="https://source.unsplash.com/random/400x500"
                  alt="random placeholder"
                  objectFit={"cover"}
                  maxW={"100%"}
                  maxH={"100%"}
                  borderRadius={"3xl"}
                  filter={{ base: "none", md: "brightness(70%)" }}
                  transition={"all 0.3s linear"}
                  _hover={{
                    filter: "brightness(100%)",
                  }}
                />
                <HStack>
                  <Text>GPA Calculate</Text>
                  <Spacer />
                  <Text>SEO</Text>
                </HStack>
                <HStack>
                  <Text>Website Design</Text>
                  <Spacer />
                  <Text>24.10.2023</Text>
                </HStack>
              </Stack>
              <CustomButton
                borderColor={"brand.100"}
                bg={"transparent"}
                color={"brand.100"}
                _hover={{
                  bg: "brand.100",
                  color: "brand.300",
                  borderColor: "brand.100",
                  fontWeight: "extrabold",
                }}
              >
                Learn <br /> More
              </CustomButton>
            </Stack>
          </Box>
          <Box
            as={Flex}
            bg={"brand.200"}
            color={"brand.100"}
            direction={"column"}
            gap={12}
          >
            <Box>
              <Text>GOT A PROJECT IN MIND ?</Text>
              <Box>
                <Heading fontSize={"6xl"} fontWeight={"500"}>
                  LETS{" "}
                  {/* <MotionBox
                display={"inline"}
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.5, 0.8, 1],
                  repeat: "Infinity",
                  repeatDelay: 1,
                }}
              >
                <GiStarShuriken />
                <Icon
                  as={GiStarShuriken}
                  color={"brand.100"}
                  boxSize={"50px"}
                />
              </MotionBox> */}
                </Heading>
                <Heading fontSize={"6xl"} fontWeight={"500"} mt={"-1"}>
                  CONNECT
                </Heading>
              </Box>
            </Box>
            <form onSubmit={handleSubmit}>
              <Stack spacing={4}>
                <FormControl
                  isRequired
                  isInvalid={touched.name && errors.name ? true : false}
                >
                  <Input
                    id="name"
                    name="name"
                    placeholder="Name"
                    type="text"
                    value={values.name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    {...inputStyles}
                  />
                </FormControl>
                <FormControl
                  isRequired
                  isInvalid={touched.email && errors.email ? true : false}
                >
                  <Input
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    {...inputStyles}
                  />
                </FormControl>
                <FormControl
                  isRequired
                  isInvalid={
                    touched.description && errors.description ? true : false
                  }
                >
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Message"
                    size={"xl"}
                    value={values.description}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    {...inputStyles}
                  />
                </FormControl>
                <Button
                  type="submit"
                  fontWeight={"bold"}
                  fontSize={"18px"}
                  {...inputStyles}
                  bg={"brand.100"}
                >
                  Submit Message
                </Button>
              </Stack>
            </form>
          </Box>
        </Stack>
      </MainLayout>
    </>
  )
}

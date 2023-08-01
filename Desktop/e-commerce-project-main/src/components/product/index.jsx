import React from 'react'
import { Card, CardBody, Stack, Text, Divider, Button, ButtonGroup, CardFooter, Image, Heading, Spinner } from '@chakra-ui/react'
import './product.css'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'; // Link bileşenini ekleyin

function Product({ veri }) {
    const dispatch = useDispatch();

    if (!veri) {
        return <div>Yükleniyor... <Spinner /></div>;
    }

    return (
        <div className='container'>
            {veri.map((film) => (
                <div key={film.id} className='card-wrapper'>
                    <Card maxW='sm' className='card' >
                        <CardBody className='cb'>
                            <Image
                                src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                                alt='Green double couch with wooden legs'
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>{film.original_title}</Heading>
                                <Text>
                                    {film.overview.slice(0, 120)}...
                                </Text>
                            </Stack>
                            <div className="price">
                                <Text color='blue.600' fontSize='2xl' >
                                    $450
                                </Text>
                            </div>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <ButtonGroup spacing='2'>
                                <Link to={`/products/${film.id}`}>
                                    <Button variant='solid' colorScheme='purple'>
                                        İncele
                                    </Button>
                                </Link>
                                <Button variant='solid' colorScheme='green'  onClick={() => dispatch({ type: 'ADD_TO_BASKET', payload: film })}>

                                    Sepete Ekle
                                </Button>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                </div>
            ))}
        </div>

    );
}



export default Product
import React, { useState } from "react";
import { Container, VStack, HStack, Text, Button, Box, Image, Heading } from "@chakra-ui/react";
import { FaPlay, FaRedo } from "react-icons/fa";

const cardImages = [
  "https://images.unsplash.com/photo-1529480780361-c8cb81eb5735?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhY2UlMjBvZiUyMHNwYWRlc3xlbnwwfHx8fDE3MTc0OTAxNzl8MA&ixlib=rb-4.0.3&q=80&w=1080",
  "https://images.unsplash.com/photo-1446669052213-5dcff53f1f3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxraW5nJTIwb2YlMjBoZWFydHN8ZW58MHx8fHwxNzE3NDkwMTc5fDA&ixlib=rb-4.0.3&q=80&w=1080",
  "https://images.unsplash.com/photo-1541554685626-8016b713c293?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxxdWVlbiUyMG9mJTIwZGlhbW9uZHN8ZW58MHx8fHwxNzE3NDkwMTgwfDA&ixlib=rb-4.0.3&q=80&w=1080",
  "https://images.unsplash.com/photo-1501003878151-d3cb87799705?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxqYWNrJTIwb2YlMjBjbHVic3xlbnwwfHx8fDE3MTc0OTAxODB8MA&ixlib=rb-4.0.3&q=80&w=1080",
  // Add more card images as needed
];

const Index = () => {
  const [deck, setDeck] = useState([...cardImages]);
  const [hand, setHand] = useState([]);

  const drawCard = () => {
    if (deck.length === 0) return;
    const newDeck = [...deck];
    const card = newDeck.pop();
    setDeck(newDeck);
    setHand([...hand, card]);
  };

  const resetGame = () => {
    setDeck([...cardImages]);
    setHand([]);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="xl">
          Aviator Rummy Game
        </Heading>
        <HStack spacing={4}>
          <Button leftIcon={<FaPlay />} colorScheme="teal" onClick={drawCard}>
            Draw Card
          </Button>
          <Button leftIcon={<FaRedo />} colorScheme="red" onClick={resetGame}>
            Reset Game
          </Button>
        </HStack>
        <Box>
          <Text fontSize="xl">Your Hand:</Text>
          <HStack spacing={4}>
            {hand.map((card, index) => (
              <Image key={index} src={card} alt={`Card ${index}`} boxSize="100px" />
            ))}
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;

import { Box, Divider, Text } from "@chakra-ui/react";

interface Session {
  title: string;
  room: string;
  schedule: string;
  speaker: string;
  description: string;
}

interface EventBodyProps {
  talk: string;
  sessions: Session[];
}

const EventBody = ({ talk, sessions }: EventBodyProps) => {
  return (
    <Box
      display="flex"
      justifyContent="flex-start"
      flexDirection="column"
      alignItems="center"
      h={["auto", "auto", "auto", "auto", 600]}
      w="full"
      overflowY="auto"
      textAlign="center"
    >
      <Text
        mb={5}
        fontSize={["sm", "lg", "3xl"]}
        fontWeight={700}
        display={["none"]}
      >
        {talk}
      </Text>
      {sessions.map(({ title, room, schedule, speaker, description }) => (
        <Box mb={2} w="full" key={description + room + speaker}>
          <Text fontSize={["xl", "xl"]} fontWeight={500} marginBottom="10px">
            {title}
          </Text>
          <Text fontSize={["lg", "lg"]} fontWeight={700}>
            {room}
          </Text>
          <Text fontSize="18px" color="red" marginBottom="10px">
            {schedule}
          </Text>
          {speaker && <Text fontWeight={400}>Speaker: {speaker}</Text>}
          <Text as="i" mb={10}>
            {description}{" "}
          </Text>
          <Divider mt={5} />
        </Box>
      ))}
    </Box>
  );
};

export default EventBody;

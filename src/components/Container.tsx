import { Box } from "native-base";

export function Container({children}: any) {
  return (
    <Box
      width="100%"
      paddingX="5"
    >
      {children}
    </Box>
  )
}
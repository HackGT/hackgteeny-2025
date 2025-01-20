import { Divider } from '@chakra-ui/react';

const DEFAULT_MY = 10;

const PurpleDivider = ({mt, mb}) => {
  return (
    <Divider borderColor='#7B69EC' borderWidth='4px' mt={mt ?? DEFAULT_MY} mb={mb ?? DEFAULT_MY} />
  );
};

export default PurpleDivider;
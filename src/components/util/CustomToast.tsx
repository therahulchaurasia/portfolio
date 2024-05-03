import { Box, BoxProps, HStack, Icon, Text, UseToastOptions } from '@chakra-ui/react'
import React from 'react'
import { FaRegCheckCircle } from 'react-icons/fa'
import { FiInfo } from 'react-icons/fi'
import { IoWarningOutline } from 'react-icons/io5'
import { MdErrorOutline } from 'react-icons/md'
import { TbLoader } from 'react-icons/tb'

interface Props extends Omit<BoxProps, 'children'> {
  message: string
  severity?: UseToastOptions['status']
}

export default function maxWCustomToast({ message, severity = 'success', ...props }: Props) {
  const status = colorMap.get(severity)
  const icon = iconMap.get(severity)

  return (
    <Box color={status} p={3} bg="white" rounded={'md'} borderTop={'4px'}>
      <HStack>
        <Icon as={icon} boxSize={'25px'} />
        <Text color={'black'} fontWeight={500}>
          {message}
        </Text>
      </HStack>
    </Box>
  )
}

const colorMap = new Map([
  ['info', 'blue.400'],
  ['warning', 'orange'],
  ['success', 'green'],
  ['error', 'red.400'],
  ['loading', 'indigo'],
])

const iconMap = new Map([
  ['info', FiInfo],
  ['warning', IoWarningOutline],
  ['success', FaRegCheckCircle],
  ['error', MdErrorOutline],
  ['loading', TbLoader],
])

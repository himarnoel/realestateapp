import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Link } from 'expo-router'

const Index = () => {
  const [signIn, setsignIn] = useState<boolean>(false)
  return (
    <View className='h-screen  flex flex-col items-center justify-center w-full '>
    <Link href={"/signin"}>Signin</Link>
    <Link href={"/explore"}>Explore</Link>
    <Link href={"/profile"}>Signin</Link>
    <Link href={"/properties/1"}>Propties</Link>
    </View>
  )
}

export default Index
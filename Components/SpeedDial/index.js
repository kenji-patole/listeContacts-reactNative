import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SpeedDial } from 'react-native-elements';
import { FAB } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import { useSelector, useDispatch } from 'react-redux';
import { afficheModal } from '../../Redux/Actions/modal';


const index = () => {

    const {modal} = useSelector(state => state)

    const dispatchModal = useDispatch()

    const open = () => {
        dispatchModal(afficheModal({visible:!modal.visible}))
    }
    

    return (
        <FAB  
            size="large"
            placement="right"
            icon={
                <Icon
                  name="plus"
                  size={25}
                  color="white"
                />
            }
            onPress={open}
            visible={!modal.visible}
        />
    )
}

export default index

const styles = StyleSheet.create({})



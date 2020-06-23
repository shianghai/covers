import React, {useState} from 'react'
import {StyleSheet, View} from 'react-native'
import CountryPicker from 'react-native-country-picker-modal'
import {CountryCode} from '../types';

const styles = StyleSheet.create({
    // ...
})

export default function Picker() {
    const [countryCode, setCountryCode] = useState('GH')
    const [country, setCountry] = useState(null)
    const [withCountryNameButton, setWithCountryNameButton] = useState(
        true,
    )
    const [withFlag, setWithFlag] = useState(true)
    const [withEmoji, setWithEmoji] = useState(true)
    const [withFilter, setWithFilter] = useState(true)
    const [withAlphaFilter, setWithAlphaFilter] = useState(false)
    const [withCallingCode, setWithCallingCode] = useState(false)
    const onSelect = (country) => {
        setCountryCode(country.cca2)
        setCountry(country)
    }
    return (
        <View style={styles.container}>

            <CountryPicker
                {...{
                    countryCode,
                    withFilter,
                    withFlag,
                    withCountryNameButton,
                    withAlphaFilter,
                    withCallingCode,
                    withEmoji,
                    onSelect,
                    containerButtonStyle: {
                        justifyContent: 'space-between',
                        alignItems: 'baseline'
                    }
                }}

            />

        </View>
    )
}
import React, { useRef } from 'react';
import  { Paystack , paystackProps}  from 'react-native-paystack-webview';
import { StyleSheet, View, TouchableOpacity,Text } from 'react-native';
import { EXPO_PAYSTACK_KEY } from "@env"


const Pay = ({ amount }) => {
  const paystackWebViewRef = useRef(paystackProps.PayStackRef); 

  return (
    <View style={{flex: 1}}>
      <Paystack
        paystackKey={EXPO_PAYSTACK_KEY}
        // paystackSecretKey="sk_test_cc386d665f809cd931db8c2ee6edb54873c964b1"
        billingEmail="xolilenxiweni2022@gmail.com"
        billingName='Xoli'
        currency="ZAR"
        amount={Number(amount) / 100}
        onCancel={(e) => {
            console.log(e)
        }}
        onSuccess={(res) => {
            console.log(res)
        }}
        ref={paystackWebViewRef}
      />

        <View style={styles.payWrapper}>
        <TouchableOpacity style={styles.payButton} onPress={()=> paystackWebViewRef.current.startTransaction()}>
          <Text style={styles.buttonText}>{'Checkout'}</Text>
        </TouchableOpacity>
        </View>
      </View>
  );
}
const styles = StyleSheet.create({
    payButton:{
        width: 300,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        borderRadius: 10,
    },
    buttonText:{
        // textAlign: 'center',
        // fontSize: 16,
        color: '#fff',
        
    },
    payWrapper:{
        width: '100%'
    }

})
export default Pay;
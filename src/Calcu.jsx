import React, { useState,useEffect } from 'react';
import {Alert,TouchableOpacity, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function Cal() {
  const [modalVisible, setModalVisible]=useState(false)

  const [pass, setpass] = useState();

  const navigation = useNavigation();
  
  useEffect(() => {
    const localget=async()=>{
        
    
      try {
        const value = await AsyncStorage.getItem('pass');
      console.warn(value);
      setpass(value)
  
      } catch (error) {
        // Error retrieving data
        console.warn(error);
    };
  }
  
  localget()
   
  }, []);// Get the navigation object

  const remov = async () => {


    try {
      const value = await AsyncStorage.removeItem('pass');
      console.warn(value);
    

    } catch (error) {
      // Error retrieving data

    };
  }


  const [input, setInput] = useState("");
  const [local, setlocal] = useState();
  const [result, setResult] = useState("");
  const handleLongPress = () => {
    navigation.navigate('ss')
    // Alert.alert('Long Press', 'You held the button!');
  };
  const handleInput = (value) => {
    setInput(input + value);
  };

  const calculateResult = () => {
 if (pass===input) {
  console.warn('caht now go fdrom');
  navigation.navigate("chat")

 }
 else{
  try {
    setResult(eval(input).toString());
  } catch (error) {
    setResult("Error");
  }
 }
  };

  const clearInput = ({navigation}) => {
    setInput("");
    setResult("");
  };

  const remove=async()=>{

 
    try {
    const val= await AsyncStorage.removeItem('pass');

   
console.warn('value',val);
    } catch (error) {
      // Error retrieving data
console.warn('error',error);
  };
  }


  return (

    <>




<View style={styles.container} >
   <View className=' flex  items-end'>
   <Text  className='  text-black text-[53px]'>{input || "0"}</Text>
   </View>
      <View className=' flex items-end'>
      <Text  className=' text-green-500  text-[35px]'>{result || "0"}</Text>

      </View>
      <View style={styles.row}>
        <Button label="1" onPress={() => handleInput("1")} />
        <Button label="2" onPress={() => handleInput("2")} />
        <Button label="3" onPress={() => handleInput("3")} />
        <Button label="+" onPress={() => handleInput("+")} />
      </View>
      <View style={styles.row}>
        <Button label="4" onPress={() => handleInput("4")} />
        <Button label="5" onPress={() => handleInput("5")} />
        <Button label="6" onPress={() => handleInput("6")} />
        <Button label="-" onPress={() => handleInput("-")} />
      </View>
      <View style={styles.row}>
        <Button label="7" onPress={() => handleInput("7")} />
        <Button label="8" onPress={() => handleInput("8")} />
        <Button label="9" onPress={() => handleInput("9")} />
        <Button label="*" onPress={() => handleInput("*")} />
                
      </View>
      <View style={styles.row}>
        <Button label="C" onPress={clearInput} />
        <Button label="0" onPress={() => handleInput("0")} />
        {/* <Button label="=" onPress={calculateResult}  /> */}
        <Pressable
     onPress={calculateResult}
    onLongPress={handleLongPress}
style={({ pressed }) => [
  {
    backgroundColor: pressed ? '#2980b9' : '#3498db',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
]}
>
<Text style={{ color: 'red', fontSize: 2 }}>=</Text>
</Pressable>
        <Button label="/" onPress={() => handleInput("/")} />
    
      </View>
{/* {
  
  pass?  null:<TouchableOpacity  className=' flex justify-center items-center bg-green-800 'onPress={()=>navigation.navigate('password')}>
  <Text className=' text-white text-2xl'>ccreapsswoed</Text>
</TouchableOpacity>
 }  */}
{/* {
 pass ?<Text>yed pass</Text>:<Text>pass not</Text>
} */}

{/* <Text>
   pass {pass}
</Text> */}




{/* <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal plese</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View> */}
    </View>
    </>

  );
}

const Button = ({ label, onPress }) => {
  return (
    <TouchableOpacity style={styles.button}  onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  display: {
    fontSize: 40,
    textAlign: 'right',
    marginBottom: 10,
  },
  result: {
    fontSize: 30,
    textAlign: 'right',
    marginBottom: 20,
    color: '#888',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 25,
    color: 'white',
  },
});
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {FontAwesome5, FontAwesome} from '@expo/vector-icons';

function InicioScreen({navigation}){
  return (
    <View style={styles.container}>
      <View style={{width:"100%", flex:1, alignItems:"center", paddingTop:50, paddingBottom:5}}>
          <Image source={require('./assets/images/valor.png')} style={styles.logo} resizeMode="contain"/>
      </View>
      <View style={{flex:2, alignItems:"center"}}>
        <Text style={styles.titulo}>
        Personajes de Valorant
        </Text>
        <Text style={{paddingBottom:5, paddingHorizontal:50, alignItems:"center"}}>
          Se mostrara algunos personajes del juego de Riot Games, Valorant.
        </Text>

        <TouchableOpacity  style={styles.botonOmen} onPress={() => {
            navigation.navigate("Omen");
        }}>
          <Text style={{color:"#FFF"}}>
            Omen
          </Text>
        </TouchableOpacity>

        <TouchableOpacity  style={styles.botonReyna} onPress={() => {
            navigation.navigate("Reyna");
        }}>
          <Text style={{color:"#FFF"}}>
            Reyna
          </Text>
        </TouchableOpacity>

        <TouchableOpacity  style={styles.botonJett} onPress={() => {
            navigation.navigate("Jett");
        }}>
          <Text style={{color:"#FFF"}}>
            Jett
          </Text>
        </TouchableOpacity>

        <TouchableOpacity  style={styles.botonViper} onPress={() => {
            navigation.navigate("Viper");
        }}>
          <Text style={{color:"#FFF"}}>
            Viper
          </Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.botonViper} onPress={() => {
            navigation.navigate("Killjoy");
        }}>
          <Text style={{color:"#FFF"}}>
            Killjoy
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

function Omen({navigation}){
  return (
    <View style={styles.container}>
      <View style={{width:"100%", flex:1, alignItems:"center", paddingTop:100, paddingBottom:30}}>
          <Image source={require('./assets/images/omen.png')} style={styles.logo} resizeMode="contain"/>
      </View>
      <View style={{flex:2, alignItems:"center"}}>
        <Text style={styles.titulo}>
        Omen
        </Text>
        <Text style={{paddingBottom:50, paddingHorizontal:50, alignItems:"center"}}>
        Un espectro de la memoria, Omen caza entre las sombras, ciega a los enemigos, se transporta a través del campo de batalla y deja que la paranoia los invada mientras intentan descubrir dónde atacará.
        </Text>
        <TouchableOpacity  style={styles.boton2Omen} onPress={() => {
            navigation.navigate("Inicio");
        }}>
          <Text style={{color:"#1E168B"}}>
            Ir a incio
          </Text>
        </TouchableOpacity>

       
        
      </View>
    </View>
  );
}
function Reyna({navigation}){
  return (
    <View style={styles.container}>
      <View style={{width:"100%", flex:1, alignItems:"center", paddingTop:100, paddingBottom:30}}>
          <Image source={require('./assets/images/reyna.png')} style={styles.logo} resizeMode="contain"/>
      </View>
      <View style={{flex:2, alignItems:"center"}}>
        <Text style={styles.titulo}>
        Reyna
        </Text>
        <Text style={{paddingBottom:50, paddingHorizontal:50, alignItems:"center"}}>
        Desde el corazón de México, Reyna llega para dominar los duelos uno contra uno y cada asesinato que realiza aumenta su poder. Su letalidad solo está limitada por tu destreza al usarla, por lo que su eficacia dependerá mucho de ello.
        </Text>
        <TouchableOpacity  style={styles.boton2Reyna} onPress={() => {
            navigation.navigate("Inicio");
        }}>
          <Text style={{color:"#7D16C5"}}>
            Ir a incio
          </Text>
        </TouchableOpacity>

      
        
      </View>
    </View>
  );
}
function Jett({navigation}){
  return (
    <View style={styles.container}>
      <View style={{width:"100%", flex:1, alignItems:"center", paddingTop:100, paddingBottom:30}}>
          <Image source={require('./assets/images/jett.png')} style={styles.logo} resizeMode="contain"/>
      </View>
      <View style={{flex:2, alignItems:"center"}}>
        <Text style={styles.titulo}>
        Jett
        </Text>
        <Text style={{paddingBottom:50, paddingHorizontal:50, alignItems:"center"}}>
        Proviene de Corea del Sur. El ágil y evasivo estilo de pelea de Jett le permite enfrentarse a riesgos que otros no pueden. Es imparable en todos los enfrentamientos y acaba con sus enemigos antes de que sepan qué los atacó.
        </Text>
        <TouchableOpacity  style={styles.boton2Jett} onPress={() => {
            navigation.navigate("Inicio");
        }}>
          <Text style={{color:"#4E97E9"}}>
            Ir a incio
          </Text>
        </TouchableOpacity>

        
        
      </View>
    </View>
  );
}
function Viper({navigation}){
  return (
    <View style={styles.container}>
      <View style={{width:"100%", flex:1, alignItems:"center", paddingTop:100, paddingBottom:30}}>
          <Image source={require('./assets/images/viper.png')} style={styles.logo} resizeMode="contain"/>
      </View>
      <View style={{flex:2, alignItems:"center"}}>
        <Text style={styles.titulo}>
        Viper
        </Text>
        <Text style={{paddingBottom:50, paddingHorizontal:50, alignItems:"center"}}>
        Química estadounidense, Viper despliega varios artefactos químicos venenosos para controlar el campo de batalla y afectar la visión de los enemigos. Si las toxinas no asesinan a su presa, sin duda lo harán sus juegos mentales.
        </Text>
        <TouchableOpacity  style={styles.boton2Viper} onPress={() => {
            navigation.navigate("Inicio");
        }}>
          <Text style={{color:"#16B91A"}}>
            Ir a incio
          </Text>
        </TouchableOpacity>

        
        
      </View>
    </View>
  );
}
function Killjoy({navigation}){
  return (
    <View style={styles.container}>
      <View style={{width:"100%", flex:1, alignItems:"center", paddingTop:100, paddingBottom:30}}>
          <Image source={require('./assets/images/kj.png')} style={styles.logo} resizeMode="contain"/>
      </View>
      <View style={{flex:2, alignItems:"center"}}>
        <Text style={styles.titulo}>
        Killjoy
        </Text>
        <Text style={{paddingBottom:50, paddingHorizontal:50, alignItems:"center"}}>
        Killjoy, la prodigio de Berlín, asegura fácilmente el campo de batalla con un arsenal de dispositivos. Si el daño que inflige su equipamiento no detiene a sus enemigos, la debilitación de sus robots la ayudarán a aniquilarlos.
        </Text>
        <TouchableOpacity  style={styles.boton2Killjoy} onPress={() => {
            navigation.navigate("Inicio");
        }}>
          <Text style={{color:"#848519"}}>
            Ir a incio
          </Text>
        </TouchableOpacity>

        
        
      </View>
    </View>
  );
}
const Main = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Main.Navigator>
        <Main.Screen name ="Inicio" component={InicioScreen}/>
        <Main.Screen name ="Omen" component={Omen}/>
        <Main.Screen name ="Reyna" component={Reyna}/>
        <Main.Screen name ="Jett" component={Jett}/>
        <Main.Screen name ="Viper" component={Viper}/>
        <Main.Screen name ="Killjoy" component={Killjoy}/>
      </Main.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width:"80%",
    height:undefined,
    flex:1
  },
  titulo:{
    fontSize:20,
    color:'#F00',
    fontWeight:'bold',
    marginBottom:20
  },
  botonOmen:{
    backgroundColor: '#1E168B',
    paddingTop: 10,
    paddingBottom:10,
    width:250,
    borderRadius:15,
    alignItems:"center",
    marginBottom:20,
    marginTop:20
  },
  botonReyna:{
    backgroundColor: '#7D16C5',
    paddingTop: 10,
    paddingBottom:10,
    width:250,
    borderRadius:15,
    alignItems:"center",
    marginBottom:20,
    marginTop:20
  },
  botonJett:{
    backgroundColor: '#4E97E9',
    paddingTop: 10,
    paddingBottom:10,
    width:250,
    borderRadius:15,
    alignItems:"center",
    marginBottom:20,
    marginTop:20
  },
  botonViper:{
    backgroundColor: '#16B91A',
    paddingTop: 10,
    paddingBottom:10,
    width:250,
    borderRadius:15,
    alignItems:"center",
    marginBottom:20,
    marginTop:20
  },
  botonKilljoy:{
    backgroundColor: '#848519',
    paddingTop: 10,
    paddingBottom:10,
    width:250,
    borderRadius:15,
    alignItems:"center",
    marginBottom:20,
    marginTop:20
  },
  boton2Omen:{
    backgroundColor: '#FFF',
    paddingTop: 10,
    paddingBottom:10,
    width:250,
    borderRadius:15,
    alignItems:"center",
    borderStyle:"solid",
    borderColor:'#1E168B',
    borderWidth:1,
    marginBottom:20
  },
  boton2Reyna:{
    backgroundColor: '#FFF',
    paddingTop: 10,
    paddingBottom:10,
    width:250,
    borderRadius:15,
    alignItems:"center",
    borderStyle:"solid",
    borderColor:'#7D16C5',
    borderWidth:1,
    marginBottom:20
  },
  boton2Jett:{
    backgroundColor: '#FFF',
    paddingTop: 10,
    paddingBottom:10,
    width:250,
    borderRadius:15,
    alignItems:"center",
    borderStyle:"solid",
    borderColor:'#4E97E9',
    borderWidth:1,
    marginBottom:20
  },
  boton2Viper:{
    backgroundColor: '#FFF',
    paddingTop: 10,
    paddingBottom:10,
    width:250,
    borderRadius:15,
    alignItems:"center",
    borderStyle:"solid",
    borderColor:'#16B91A',
    borderWidth:1,
    marginBottom:20
  },
  boton2Killjoy:{
    backgroundColor: '#FFF',
    paddingTop: 10,
    paddingBottom:10,
    width:250,
    borderRadius:15,
    alignItems:"center",
    borderStyle:"solid",
    borderColor:'#848519',
    borderWidth:1,
    marginBottom:20
  }
});

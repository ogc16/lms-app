export const reactNativeCourse = {
  id: 'react_native',
  title: 'React Native',
  subtitle: 'Build mobile apps with React',
  icon: '📱',
  color: '#61DAFB',
  bgColor: '#E3F2FD',
  description: 'React Native lets you build native mobile apps for iOS and Android using React. You write JavaScript components that render to native platform UI elements, not web views.',
  chapters: [
    {
      id: 'rn_intro',
      title: 'Introduction to React Native',
      lessons: [
        {
          id: 'rn_what_is',
          title: 'What is React Native?',
          content: 'React Native, created by Meta (Facebook), lets you build mobile apps using JavaScript and React.\n\nKey features:\n• Write once, run on iOS and Android\n• Native components (not web views)\n• Hot reloading for fast development\n• Access to native device APIs\n• Large ecosystem of libraries\n\nUnlike React for web, React Native uses View, Text, and other native components instead of divs and spans.\n\nExpo is the recommended way to start—it handles the native build tooling for you.',
          codeExamples: [
            {
              title: 'Hello, React Native!',
              code: 'import React from "react";\nimport { View, Text, StyleSheet } from "react-native";\n\nexport default function App() {\n    return (\n        <View style={styles.container}>\n            <Text style={styles.title}>Hello, React Native!</Text>\n        </View>\n    );\n}\n\nconst styles = StyleSheet.create({\n    container: {\n        flex: 1,\n        justifyContent: "center",\n        alignItems: "center",\n        backgroundColor: "#F5F7FA"\n    },\n    title: {\n        fontSize: 24,\n        fontWeight: "700",\n        color: "#2C3E50"\n    }\n});'
            }
          ]
        },
        {
          id: 'rn_setup',
          title: 'Setting Up',
          content: 'Two ways to start a React Native project:\n\nExpo (recommended for most projects):\nnpx create-expo-app MyApp\ncd MyApp\nnpx expo start\n\nExpo handles native builds, updates, and testing on physical devices.\n\nReact Native CLI (more control):\nnpx react-native init MyApp\n\nRequires Xcode (Mac) and Android Studio.\n\nExpo is easier to start with. You can eject to the bare workflow if needed.\n\nFor this course, use Expo: npx create-expo-app@latest MyApp',
          codeExamples: [
            {
              title: 'Expo Setup',
              code: '# Create a new Expo app\nnpx create-expo-app@latest MyApp\ncd MyApp\n\n# Start development\nnpx expo start\n\n# Press:\n# a - open on Android emulator\n# i - open on iOS simulator\n# w - open in web browser\n# Scan QR code with Expo Go on your phone\n\n# Install a library\nnpx expo install expo-camera expo-location'
            }
          ]
        },
        {
          id: 'rn_core',
          title: 'Core Components',
          content: 'React Native provides core components that map to native UI elements.\n\nView - container (like div)\nText - displays text (like span/p)\nScrollView - scrollable container\nTextInput - text input field\nTouchableOpacity - pressable button with opacity feedback\nImage - displays images\nFlatList - performant scrolling lists\n\nStyleSheet.create() for styles. Uses flexbox layout by default.\n\nNo CSS: styles are JavaScript objects with camelCase properties.\n\nDimensions: use Dimensions API or useWindowDimensions() hook for responsive layouts.',
          codeExamples: [
            {
              title: 'Core Components',
              code: 'import React, { useState } from "react";\nimport {\n    View, Text, TextInput, TouchableOpacity,\n    StyleSheet, ScrollView, Image\n} from "react-native";\n\nexport default function App() {\n    const [name, setName] = useState("");\n    const [items, setItems] = useState(["Learn React Native", "Build an App"]);\n\n    const addItem = () => {\n        if (name.trim()) {\n            setItems([...items, name]);\n            setName("");\n        }\n    };\n\n    return (\n        <ScrollView style={styles.container}>\n            <Text style={styles.title}>My List</Text>\n            \n            <TextInput\n                style={styles.input}\n                placeholder="Add item"\n                value={name}\n                onChangeText={setName}\n            />\n            \n            <TouchableOpacity style={styles.button} onPress={addItem}>\n                <Text style={styles.buttonText}>Add</Text>\n            </TouchableOpacity>\n            \n            {items.map((item, i) => (\n                <View key={i} style={styles.item}>\n                    <Text>{item}</Text>\n                </View>\n            ))}\n        </ScrollView>\n    );\n}\n\nconst styles = StyleSheet.create({\n    container: { flex: 1, padding: 20, backgroundColor: "#F5F7FA" },\n    title: { fontSize: 28, fontWeight: "800", marginBottom: 20, color: "#2C3E50" },\n    input: { borderWidth: 1, borderColor: "#ddd", borderRadius: 8, padding: 12, fontSize: 16, backgroundColor: "#fff" },\n    button: { backgroundColor: "#4A90D9", padding: 14, borderRadius: 8, alignItems: "center", marginTop: 10 },\n    buttonText: { color: "#fff", fontWeight: "700", fontSize: 16 },\n    item: { backgroundColor: "#fff", padding: 16, borderRadius: 8, marginTop: 10, elevation: 1 }\n});'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'Does React Native use web views to render?',
          options: ['Yes', 'No, it uses native components'],
          correct: 1
        },
        {
          question: 'What command starts an Expo project?',
          options: ['npx start-expo', 'npx expo start', 'expo run', 'npm expo start'],
          correct: 1
        },
        {
          question: 'What component replaces <div> in React Native?',
          options: ['<Container>', '<View>', '<Box>', '<Div>'],
          correct: 1
        }
      ]
    },
    {
      id: 'rn_components',
      title: 'Components and Navigation',
      lessons: [
        {
          id: 'rn_flatlist',
          title: 'Lists and ScrollView',
          content: 'For scrolling lists, FlatList is performant—it only renders visible items.\n\n<FlatList\n    data={items}\n    renderItem={({ item }) => <Text>{item.name}</Text>}\n    keyExtractor={item => item.id}\n/>\n\nScrollView renders all content upfront—use for small amounts of content.\n\nFlatList features:\n• pull-to-refresh (onRefresh + refreshing props)\n• infinite scroll (onEndReached)\n• header/footer (ListHeaderComponent, ListFooterComponent)\n• horizontal mode (horizontal={true})\n\nSectionList for grouped data with section headers.\n\nVirtualizedList for complete control over virtualization.',
          codeExamples: [
            {
              title: 'FlatList with Pull to Refresh',
              code: 'import React, { useState, useCallback } from "react";\nimport { FlatList, Text, View, StyleSheet, RefreshControl } from "react-native";\n\nexport default function App() {\n    const [data, setData] = useState([\n        { id: "1", name: "Item 1" },\n        { id: "2", name: "Item 2" },\n        { id: "3", name: "Item 3" },\n    ]);\n    const [refreshing, setRefreshing] = useState(false);\n\n    const onRefresh = useCallback(async () => {\n        setRefreshing(true);\n        // Fetch new data\n        await new Promise(r => setTimeout(r, 1000));\n        setData([...data, { id: Date.now(), name: "New Item" }]);\n        setRefreshing(false);\n    }, [data]);\n\n    const renderItem = ({ item, index }) => (\n        <View style={styles.item}>\n            <Text style={styles.index}>{index + 1}</Text>\n            <Text style={styles.name}>{item.name}</Text>\n        </View>\n    );\n\n    return (\n        <FlatList\n            data={data}\n            renderItem={renderItem}\n            keyExtractor={item => item.id}\n            refreshControl={\n                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />\n            }\n            contentContainerStyle={styles.list}\n        />\n    );\n}\n\nconst styles = StyleSheet.create({\n    list: { padding: 16 },\n    item: { flexDirection: "row", alignItems: "center", padding: 16, backgroundColor: "#fff", borderRadius: 8, marginBottom: 8, elevation: 1 },\n    index: { fontSize: 16, fontWeight: "700", color: "#4A90D9", marginRight: 12, width: 30 },\n    name: { fontSize: 16, color: "#2C3E50" }\n});'
            }
          ]
        },
        {
          id: 'rn_navigation',
          title: 'Navigation',
          content: 'React Navigation is the standard navigation library for React Native.\n\nInstall:\nnpx expo install @react-navigation/native @react-navigation/native-stack\n\nStack navigator:\nimport { createNativeStackNavigator } from "@react-navigation/native-stack";\nconst Stack = createNativeStackNavigator();\n\n<Stack.Navigator>\n    <Stack.Screen name="Home" component={HomeScreen} />\n    <Stack.Screen name="Details" component={DetailsScreen} />\n</Stack.Navigator>\n\nBottom tabs:\nnpm install @react-navigation/bottom-tabs\n\nnavigation.navigate("Screen") to navigate.\nnavigation.goBack() to go back.\n\nPass params: navigation.navigate("Details", { id: 42 });\nReceive: route.params.id',
          codeExamples: [
            {
              title: 'Stack Navigation',
              code: 'import React from "react";\nimport { NavigationContainer } from "@react-navigation/native";\nimport { createNativeStackNavigator } from "@react-navigation/native-stack";\nimport { View, Text, TouchableOpacity, StyleSheet } from "react-native";\n\nconst Stack = createNativeStackNavigator();\n\nfunction HomeScreen({ navigation }) {\n    return (\n        <View style={styles.container}>\n            <Text>Home Screen</Text>\n            <TouchableOpacity\n                style={styles.button}\n                onPress={() => navigation.navigate("Details", { item: "Hello" })}\n            >\n                <Text style={styles.buttonText}>Go to Details</Text>\n            </TouchableOpacity>\n        </View>\n    );\n}\n\nfunction DetailsScreen({ route, navigation }) {\n    const { item } = route.params;\n    return (\n        <View style={styles.container}>\n            <Text>Details: {item}</Text>\n            <TouchableOpacity\n                style={styles.button}\n                onPress={() => navigation.goBack()}\n            >\n                <Text style={styles.buttonText}>Go Back</Text>\n            </TouchableOpacity>\n        </View>\n    );\n}\n\nexport default function App() {\n    return (\n        <NavigationContainer>\n            <Stack.Navigator>\n                <Stack.Screen name="Home" component={HomeScreen} />\n                <Stack.Screen name="Details" component={DetailsScreen} />\n            </Stack.Navigator>\n        </NavigationContainer>\n    );\n}\n\nconst styles = StyleSheet.create({\n    container: { flex: 1, justifyContent: "center", alignItems: "center" },\n    button: { backgroundColor: "#4A90D9", padding: 12, borderRadius: 8, marginTop: 16 },\n    buttonText: { color: "#fff", fontWeight: "600" }\n});'
            }
          ]
        },
        {
          id: 'rn_styling',
          title: 'Styling and Layout',
          content: 'React Native uses StyleSheet.create() for styles. All styles are JavaScript objects.\n\nFlexbox is the default layout model:\n• flexDirection: "column" (default) or "row"\n• justifyContent: alignment on main axis\n• alignItems: alignment on cross axis\n• flex: number (proportional sizing)\n\nNo CSS inheritance: Text components must be styled directly.\n\nPlatform-specific styles:\nimport { Platform } from "react-native";\n\nconst styles = StyleSheet.create({\n    container: {\n        ...Platform.select({\n            ios: { shadowColor: "#000", shadowOpacity: 0.2 },\n            android: { elevation: 4 }\n        })\n    }\n});\n\nuseWindowDimensions hook for responsive layouts.',
          codeExamples: [
            {
              title: 'Flexbox Layout',
              code: 'import React from "react";\nimport { View, Text, StyleSheet, useWindowDimensions, Platform } from "react-native";\n\nexport default function App() {\n    const { width, height } = useWindowDimensions();\n    const isLandscape = width > height;\n\n    return (\n        <View style={styles.container}>\n            <View style={[styles.card, { backgroundColor: "#FF6B6B" }]}>\n                <Text style={styles.cardText}>Red</Text>\n            </View>\n            <View style={[styles.card, { backgroundColor: "#4ECDC4" }]}>\n                <Text style={styles.cardText}>Teal</Text>\n            </View>\n            <View style={[styles.card, { backgroundColor: "#45B7D1" }]}>\n                <Text style={styles.cardText}>Blue</Text>\n            </View>\n            <Text>Window: {width}x{height} | {isLandscape ? "Landscape" : "Portrait"}</Text>\n        </View>\n    );\n}\n\nconst styles = StyleSheet.create({\n    container: {\n        flex: 1,\n        flexDirection: "row",\n        flexWrap: "wrap",\n        justifyContent: "center",\n        alignItems: "center",\n        gap: 12,\n        padding: 16,\n        backgroundColor: "#F5F7FA"\n    },\n    card: {\n        width: 120,\n        height: 120,\n        borderRadius: 16,\n        justifyContent: "center",\n        alignItems: "center",\n        ...Platform.select({\n            ios: { shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 4 },\n            android: { elevation: 4 }\n        })\n    },\n    cardText: { color: "#fff", fontSize: 16, fontWeight: "700" }\n});'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'Which list component only renders visible items?',
          options: ['ScrollView', 'FlatList', 'ListView', 'VirtualList'],
          correct: 1
        },
        {
          question: 'What library is standard for navigation?',
          options: ['React Router', 'React Navigation', 'Native Navigation', 'Expo Router'],
          correct: 1
        },
        {
          question: 'What hook gets window dimensions?',
          options: ['useDimensions()', 'useWindowDimensions()', 'useScreenSize()', 'useViewport()'],
          correct: 1
        }
      ]
    },
    {
      id: 'rn_native',
      title: 'Native Features',
      lessons: [
        {
          id: 'rn_apis',
          title: 'Device APIs',
          content: 'React Native provides access to device features via built-in APIs and expo modules.\n\nBuilt-in APIs:\nimport { Alert, Platform, Vibration, Linking } from "react-native";\n\nAlert.alert("Title", "Message");\nLinking.openURL("https://example.com");\n\nExpo modules (install with npx expo install):\n• expo-camera - take photos, scan barcodes\n• expo-location - GPS position\n• expo-notifications - push notifications\n• expo-file-system - read/write files\n• expo-sensors - accelerometer, gyroscope\n• expo-haptics - haptic feedback\n\nEach module provides a consistent API across iOS and Android.',
          codeExamples: [
            {
              title: 'Using Device APIs',
              code: 'import React, { useState } from "react";\nimport { View, Text, TouchableOpacity, Alert, StyleSheet, Linking } from "react-native";\nimport * as Location from "expo-location";\n\nexport default function App() {\n    const [location, setLocation] = useState(null);\n\n    const getLocation = async () => {\n        const { status } = await Location.requestForegroundPermissionsAsync();\n        if (status !== "granted") {\n            Alert.alert("Permission Denied", "Location access is required");\n            return;\n        }\n        const loc = await Location.getCurrentPositionAsync({});\n        setLocation(loc.coords);\n    };\n\n    return (\n        <View style={styles.container}>\n            <TouchableOpacity style={styles.button} onPress={getLocation}>\n                <Text style={styles.buttonText}>Get Location</Text>\n            </TouchableOpacity>\n            \n            {location && (\n                <View style={styles.info}>\n                    <Text>Lat: {location.latitude.toFixed(4)}</Text>\n                    <Text>Lng: {location.longitude.toFixed(4)}</Text>\n                </View>\n            )}\n            \n            <TouchableOpacity\n                style={[styles.button, { backgroundColor: "#27AE60" }]}\n                onPress={() => Linking.openURL("https://reactnative.dev")}\n            >\n                <Text style={styles.buttonText}>Open React Native Docs</Text>\n            </TouchableOpacity>\n        </View>\n    );\n}\n\nconst styles = StyleSheet.create({\n    container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20, backgroundColor: "#F5F7FA" },\n    button: { backgroundColor: "#4A90D9", padding: 16, borderRadius: 10, marginBottom: 16, width: "100%", alignItems: "center" },\n    buttonText: { color: "#fff", fontSize: 16, fontWeight: "700" },\n    info: { backgroundColor: "#fff", padding: 16, borderRadius: 10, marginBottom: 16, width: "100%", elevation: 2 }\n});'
            }
          ]
        },
        {
          id: 'rn_networking',
          title: 'Networking and Storage',
          content: 'React Native uses the standard fetch API for networking.\n\nfetch("https://api.example.com/data")\n    .then(res => res.json())\n    .then(data => console.log(data));\n\nAsyncStorage for simple key-value persistence:\nimport AsyncStorage from "@react-native-async-storage/async-storage";\n\nawait AsyncStorage.setItem("key", JSON.stringify(value));\nconst data = JSON.parse(await AsyncStorage.getItem("key"));\n\nFor complex databases, use expo-sqlite.\n\nImages: source={{ uri: "https://..." }} for network images.\n\nActivityIndicator shows loading states.',
          codeExamples: [
            {
              title: 'Fetch and Storage',
              code: 'import React, { useState, useEffect } from "react";\nimport { View, Text, FlatList, ActivityIndicator, StyleSheet } from "react-native";\nimport AsyncStorage from "@react-native-async-storage/async-storage";\n\nexport default function App() {\n    const [users, setUsers] = useState([]);\n    const [loading, setLoading] = useState(true);\n\n    useEffect(() => {\n        loadUsers();\n    }, []);\n\n    const loadUsers = async () => {\n        try {\n            // Check cache first\n            const cached = await AsyncStorage.getItem("users");\n            if (cached) {\n                setUsers(JSON.parse(cached));\n                setLoading(false);\n                return;\n            }\n\n            // Fetch from API\n            const res = await fetch("https://jsonplaceholder.typicode.com/users");\n            const data = await res.json();\n            \n            // Cache the data\n            await AsyncStorage.setItem("users", JSON.stringify(data));\n            \n            setUsers(data);\n        } catch (error) {\n            console.error("Failed to load users", error);\n        } finally {\n            setLoading(false);\n        }\n    };\n\n    if (loading) {\n        return (\n            <View style={styles.center}>\n                <ActivityIndicator size="large" color="#4A90D9" />\n            </View>\n        );\n    }\n\n    return (\n        <FlatList\n            data={users}\n            keyExtractor={item => item.id.toString()}\n            renderItem={({ item }) => (\n                <View style={styles.card}>\n                    <Text style={styles.name}>{item.name}</Text>\n                    <Text style={styles.email}>{item.email}</Text>\n                </View>\n            )}\n            contentContainerStyle={styles.list}\n        />\n    );\n}\n\nconst styles = StyleSheet.create({\n    center: { flex: 1, justifyContent: "center", alignItems: "center" },\n    list: { padding: 16 },\n    card: { backgroundColor: "#fff", padding: 16, borderRadius: 12, marginBottom: 10, elevation: 2 },\n    name: { fontSize: 18, fontWeight: "700", color: "#2C3E50" },\n    email: { fontSize: 14, color: "#95A5A6", marginTop: 4 }\n});'
            }
          ]
        },
        {
          id: 'rn_publish',
          title: 'Publishing',
          content: 'Publishing a React Native app to app stores.\n\nExpo build (EAS Build):\neas build --platform ios\nneas build --platform android\n\nThis creates .ipa (iOS) and .aab (Android) files.\n\nApp Store (iOS):\n1. Register for Apple Developer Program ($99/year)\n2. Create app in App Store Connect\n3. Upload via Xcode or Transporter\n4. Submit for review\n\nGoogle Play (Android):\n1. Register for Google Play Console ($25 one-time)\n2. Create app listing\n3. Upload .aab file\n4. Roll out to production\n\nOTA Updates with EAS Update: push JS updates without going through app store review.\n\nTest with TestFlight (iOS) or Internal Testing (Android) before release.',
          codeExamples: [
            {
              title: 'Build and Publish',
              code: '# Install EAS CLI\nnpm install -g eas-cli\n\n# Log in to Expo\nnpx expo login\n\n# Configure builds\neas build:configure\n\n# Build for production\neas build --platform ios --profile production\neas build --platform android --profile production\n\n# Submit to stores\neas submit --platform ios\neas submit --platform android\n\n# Push OTA update\neas update --branch production --message "Fix login bug"\n\n# EAS Build config (eas.json)\n{\n    "build": {\n        "production": {\n            "android": { "buildType": "app-bundle" },\n            "ios": { "autoIncrement": true }\n        }\n    }\n}'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'What package provides location features?',
          options: ['react-native-location', 'expo-location', 'react-location', 'location-api'],
          correct: 1
        },
        {
          question: 'What stores simple key-value data?',
          options: ['SQLite', 'AsyncStorage', 'LocalStorage', 'SecureStore'],
          correct: 1
        },
        {
          question: 'What Expo service pushes JS updates without app store review?',
          options: ['Expo Publish', 'EAS Update', 'Expo Push', 'EAS Deploy'],
          correct: 1
        }
      ]
    }
  ]
};

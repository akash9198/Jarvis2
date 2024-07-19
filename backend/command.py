import pyttsx3
import speech_recognition as sr
import eel
import time

def speak(text):
    engine = pyttsx3.init('sapi5')
    voices = engine.getProperty('voices')
    engine.setProperty('voice',voices[0].id)
    engine.setProperty('rate',174)
    eel.Displaymessage(text)
    engine.say(text)
    engine.runAndWait()

@eel.expose
def takecommand():

    r = sr.Recognizer()

    with sr.Microphone() as source:
        print('Listening...')
        eel.Displaymessage('Listening...')
        r.pause_threshold = 1
        r.adjust_for_ambient_noise(source)

        audio = r.listen(source, 10, 6)

    try:
        print('Recognizing...')
        eel.Displaymessage('Recognizing...')
        query = r.recognize_google(audio, language = 'en-in')
        print(f"user said: {query}")
        eel.Displaymessage(query)
        time.sleep(2)
        
    except Exception as e: 
        return ""
    
    return query.lower()   

@eel.expose
def allCommands() :

    try:
        query = takecommand()
        print(query)

        if "open" in query:
            from backend.feature import openCommand
            openCommand(query)

        elif "on youtube" in query:
            from backend.feature import PlayYoutube
            PlayYoutube(query)

        elif "send message" in query or "phone call" in query or "video call" in query:
            from backend.feature import findContact, whatsApp
            flag  = ""
            contact_no, name = findContact(query)
            if(contact_no != 0):
                
                if "send message" in query:
                    flag = 'message'
                    speak("what message to send")
                    query = takecommand()

                elif "phone call" in query:
                    flag = 'call'
                else:
                    flag = 'video call'      

                whatsApp(contact_no, query, flag, name)      

        else:
            print("not run")
    except:
        print("error")        

    eel.ShowHood()
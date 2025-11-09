from elevenlabs import ElevenLabs

# --- FIX IS HERE ---
client = ElevenLabs(
    api_key="sk_134730a53c9c5527e701e041c5b16861a309f96b75580270",  # <-- Add your key here
    base_url="https://api.elevenlabs.io"
)
# -----------------

try:
    audio_stream = client.text_to_speech.convert(
        voice_id="0WKkG7JmcKK7MkwhnMIe",
        output_format="mp3_44100_128",
        text="The first move is what sets everything in motion.",
        model_id="eleven_multilingual_v2"
    )

    save_file_path = "output.mp3"
    print(f"Saving audio to {save_file_path}...")

    with open(save_file_path, "wb") as f:
        for chunk in audio_stream:
            if chunk:
                f.write(chunk)

    print(f"File saved successfully!")

except Exception as e:
    print(f"An error occurred: {e}")
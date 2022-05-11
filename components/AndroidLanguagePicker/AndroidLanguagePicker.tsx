import { Picker } from "@react-native-picker/picker";
import { Language } from "prism-react-renderer";

interface LanguagePickerProps {
  callback: (language: Language) => void;
  selected: Language;
}


function LanguagePicker({callback, selected}: LanguagePickerProps) {
  return(<Picker
          selectedValue={selected}
          onValueChange={(itemValue) => callback(itemValue)}
          style={{
            height: 50,
            width: 120,
            color: "white",
            borderWidth: 2,
            borderColor: "white",
          }}
          dropdownIconColor = "white"
        >
          <Picker.Item label="CSS" value="css" />
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="javascript" />
          <Picker.Item label="Python" value="python" />
        </Picker>);
}

export default LanguagePicker;
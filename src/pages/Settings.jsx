import Header from "../layouts/partials/header";
import { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Settings() {
  const [privacyPolicy, setPrivacyPolicy] = useState('');
  const [termsConditions, setTermsConditions] = useState('');
  const [authenticationMethods, setAuthenticationMethods] = useState({
    twoFactorAuth: false,
  });

  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block'],
    [{ 'header': 1 }, { 'header': 2 }],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],
    [{ 'indent': '-1' }, { 'indent': '+1' }],
    [{ 'direction': 'rtl' }],
    [{ 'size': ['small', false, 'large', 'huge'] }],
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'color': [] }, { 'background': [] }],
    [{ 'font': [] }],
    [{ 'align': [] }],
    ['clean']
  ];

  const modules = {
    toolbar: {
      container: toolbarOptions
    }
  };

  const handleSave = (section) => {
    // Logic to save the section content (e.g., make API call)
    console.log(`Saving ${section}...`);
  };

  const handleToggle2FA = () => {
    setAuthenticationMethods(prevState => ({
      ...prevState,
      twoFactorAuth: !prevState.twoFactorAuth
    }));
  };

  return (
    <div>
      <Header header={"Manage Settings"} />
      <div className="max-w-screen-2xl mx-auto">
        <div className="mx-4 sm:mx-9 my-8 pt-8 space-y-16">
          
          <div>
            <h1 className="text-xl font-bold pb-4">Privacy Policy</h1>
            <ReactQuill
              theme="snow"
              value={privacyPolicy}
              onChange={setPrivacyPolicy}
              modules={modules}
              className="custom-quill-container"
            />
            
          </div>
          
          <div>
            <h1 className="text-xl font-bold pb-4">Terms and Conditions</h1>
            <ReactQuill
              theme="snow"
              value={termsConditions}
              onChange={setTermsConditions}
              modules={modules}
              className="custom-quill-container"
            />
            <div className="flex gap-4 mt-16 justify-end">
              <button 
                className="px-4 py-2 bg-blue-150 text-white font-medium rounded-md"
                onClick={() => handleSave('Terms and Conditions')}
              >
                Save
              </button>
            
            </div>
          </div>
        
          
        </div>
      </div>
    </div>
  );
}

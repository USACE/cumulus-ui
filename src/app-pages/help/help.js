import React from 'react';
import Navbar from '../../app-components/navbar';

import cavi_script_downloader_copy_paste from '../../img/help/cavi-script-downloader-copy-paste.png';
import cumulus_rts_ui from '../../img/help/cumulus-rts-ui.png';
import script_downloader from '../../img/help/script_downloader.png';

export default function Help(props) {
  return (
    <main>
      <Navbar />
      <div className="container mt-12 prose mx-auto">
        <h1 className="text-5xl text-center">
          <span className="font-light"> Need Help?</span>
        </h1>
        <p className="text-gray-800 mt-2 font-thin text-2xl text-center">
          For technical assistance or general questions, send an email to:
          <br />
          <a href="mailto:CWMS-GriddedData-Support@usace.army.mil">
            CWMS-GriddedData-Support@usace.army.mil
          </a>
        </p>

        <article className="mt-10 pb-10">
          <h3 className="font-bold text-xl bg-gray-200 p-3">
            Cumulus RTS UI Script Setup
          </h3>
          <p className="p-3">
            <ol className="list-inside list-decimal">
              <li>
                Create a new script in the CWMS CAVI/HEC-RTS called{' '}
                <strong>script_downloader</strong>.
              </li>
              <li>
                Copy the code from{' '}
                <a
                  className="text-blue-700"
                  href="https://raw.githubusercontent.com/USACE/rts-utils/master/watershed_scripts/script_downloader.py"
                  target="_blank"
                >
                  here{' '}
                </a>
                (Ctrl+A then Ctrl-C to select all and copy), paste into your new
                script created above.
                <img
                  alt="screenshot showing how to copy past code into CAVI script editor"
                  src={cavi_script_downloader_copy_paste}
                  className="w-1/2 ml-5"
                />
                <a
                  className="text-blue-700"
                  href={cavi_script_downloader_copy_paste}
                  target="_blank"
                >
                  Enlarge image
                </a>
              </li>
              <br />
              <li>Save and close the script editor.</li>
              <li>
                Run the <strong>script_downloader</strong> script (add to script
                panel for quick access) and select <strong>Cumulus</strong> to
                download and install the Cumulus RTS UI script.
                <img
                  alt="screenshot showing script_downloader interface"
                  src={script_downloader}
                  className="ml-5 mb-5"
                />
              </li>
              <li>
                The CumulusRTSUI script should be in your script directory, add
                to your script panel and run the Cumulus RTS UI script
                <img
                  alt="screenshot showing Cumulus CAVI RTS UI"
                  src={cumulus_rts_ui}
                  className="ml-5 mb-5"
                />
              </li>
            </ol>
            <ul className="list-inside list-disc">
              <li>
                The Cumulus RTS UI script will auto-populate the Start/End dates
                from your open forecast.
              </li>
              <li>One Watershed can be selected per request</li>
              <li>Multiple products can be selected per request</li>
              <li>
                DSS files from Cumulus are DSS version 7, but the script will
                convert to DSS-6 for compatibility.
              </li>
              <li>
                Recommend writing the <strong>Output File Location</strong> to a
                common place on your PC and pointing your grid extract to this
                file.
              </li>
              <li>
                Should updates to the script be required for enhancements or
                fixes, the code will be updated in a remote repository and
                script_downloader should be used to update.
              </li>
            </ul>
          </p>
        </article>
      </div>
    </main>
  );
}

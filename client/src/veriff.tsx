import React, {useEffect} from "react";
import Veriff from "@veriff/js-sdk";
import {createVeriffFrame} from "@veriff/incontext-sdk";

export function VeriffVerificationButton() {
    useEffect(() => {
        const veriff = Veriff({
            apiKey: process.env.VERIFF_API_KEY || '',
            parentId: "veriff-root",
            onSession: (err, response) => {
                createVeriffFrame({url: response.verification.url})

            }
        });
        veriff.setParams({
            person: {
                givenName: " ",
                lastName: " "
            },
            vendorData: "barev"
        });
        veriff.mount({
            submitBtnText: 'Verify with Veriff'
        });
    }, []);


    return (
        <div className="m-8">
            <button>asdas</button>
        </div>
    );
}

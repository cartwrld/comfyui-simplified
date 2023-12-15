import {exec} from "child_process";
import { writeFileSync } from 'fs';
import {Workflow} from "../entity/Workflow";
export class ComfyUtils {
    // async generate() {
    //
    //     exec(`python basic_workflow_api.py`, (error: any, stdout: any, stderr: any) => {
    //         if (error) {
    //             console.error(`Execution error: ${error}`);
    //             return;
    //         }
    //         console.log(`stdout: ${stdout}`);
    //         console.error(`stderr: ${stderr}`);
    //     });
    // }

    async generate(workflowData : Workflow) {

        // const promptArr = ['photograph of a young woman standing in the rain, beautiful, long hair, looking at camera']
        // writeFileSync('prompts.json', JSON.stringify({ prompts: promptArr }));
        writeFileSync('props.json', JSON.stringify(workflowData));

        const genProcess = exec(`python basic_workflow_api.py `);

        genProcess.stdout.on('data', (data) => {
            console.log('====== python output data ======');  // Log the output from the Python script
            console.log(data);  // Log the output from the Python script
            console.log('================================');  // Log the output from the Python script

            if (data.includes("Image generation complete")) {
                this.showAlert("Image has finished rendering.");
            }
        });

        genProcess.stderr.on('data', (data) => {
            console.error(`stderr: ${data}`);
        });

        genProcess.on('exit', (code) => {
            console.log(`Child exited with code ${code}`);
        });
    }
    showAlert(message: string) {
        // Implementation of the alert box depends on the environment
        // If you have a GUI library, you can create a dialog box
        // For simplicity, let's log it to the console for now
        console.log(`ALERT: ${message}`);
        // For actual alert, you could use a GUI framework or system notification
    }
}

(this.webpackJsonpcollab=this.webpackJsonpcollab||[]).push([[0],{31:function(e,t,a){e.exports=a(65)},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var i=a(0),l=a.n(i),n=a(24),o=a.n(n),r=(a(36),a(27)),s=a(2),d=(a(37),a(38),a(25)),c=a(26),m=a(30),f=a(29),v=(a(39),a(8)),p=a.n(v),u=a(1),b=a.n(u),h=a(57),g="",E=[],y=[],x=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(e){var i;return Object(d.a)(this,a),(i=t.call(this,e)).componentDidMount=function(){b()("#upload").prop("disabled",!0),b()("#uploadRevision").prop("disabled",!0),b()("#revisionFile").prop("disabled",!0),b()("#revertCmb").prop("disabled",!0),b()("#revertRevision").prop("disabled",!0),i.getFiles()},i.getFiles=function(){p.a.post(g+"/col/getfiles",{withCredentials:!0}).then((function(e){console.log(e.data),"Success"===e.data.Status?(E=e.data.files,i.setFilesTable()):alert("Not able to get files")})).catch((function(e){alert("Service failed: "+e)}))},i.handleSubmit=function(e){e.preventDefault();var t=(t=e.target.files)[0];i.setState({file:t}),b()("#upload").prop("disabled",!1),b()("#filename").text(t.name)},i.handleRevisionSubmit=function(e){e.preventDefault();var t=(t=e.target.files)[0];i.setState({revisionfile:t}),b()("#uploadRevision").prop("disabled",!1),b()("#revisionfilename").text(t.name)},i.setFilesTable=function(){b()("#filesTableBody tr").remove();for(var e=document.getElementById("filesTable"),t=document.getElementById("filesTableBody"),a=0;a<E.length;a++){var l=E[a].id,n=E[a].fileName,o=E[a].uploadedDate,r=E[a].noOfRevisions,s=document.createElement("tr");s.onclick=function(e){b()(e.path[1]).addClass("selected").siblings().removeClass("selected"),b()(e.path[1]).addClass("selected").siblings().find("td:eq(4)").removeClass("selected"),b()(".revision-form")[0].reset(),b()("#revertRevision").prop("disabled",!1),b()("#revertCmb").prop("disabled",!1),b()("#revisionFile").prop("disabled",!1),b()("#revisionfilename").text(""),i.setState({revisionfile:""});var t=b()("#filesTableBody tr.selected").find("td:eq(1)").text();b()("#revision_text").text("Submit a New Revision for the Selected File"),i.getFilesRevision(t)},i.addTD(s,l,"no-display"),i.addTD(s,n,"text-center"),i.addTD(s,o,"text-center"),i.addTD(s,r,"text-center"),i.addTDView(s,"text-center"),t.append(s)}e.append(t)},i.getFilesRevision=function(e){p.a.post(g+"/col/getfilerevisions",h.stringify({fileName:e}),{withCredentials:!0}).then((function(e){"Success"===e.data.Status?((y=e.data.fileRevision).sort((function(e,t){return t.revision.localeCompare(e.revision)})),i.setFilesRevisionTable(),i.fillRevertCmb()):alert("Not able to get file revisions")})).catch((function(e){alert("Service failed: "+e)}))},i.setFilesRevisionTable=function(){b()("#filesRevisionTableBody tr").remove();for(var e=document.getElementById("filesRevisionTable"),t=document.getElementById("filesRevisionTableBody"),a=0;a<y.length;a++){var l=y[a].fileName,n=y[a].revisionFileName,o=y[a].revision,r=y[a].commitMessage,s=y[a].updatedOn,d=document.createElement("tr");i.addTD(d,l,"no-display"),i.addTD(d,n,"no-display"),i.addTD(d,o,"text-center"),i.addTD(d,r,"text-center"),i.addTD(d,s,"text-center"),i.addTDView2(d,"text-center"),t.append(d)}e.append(t)},i.viewRevisionFile=function(){var e=b()("#filesRevisionTableBody tr.selected").find("td:eq(1)").text(),t=b()("#filesRevisionTableBody tr.selected").find("td:eq(0)").text(),a=b()("#filesRevisionTableBody tr.selected").find("td:eq(2)").text();p.a.get(g+"/col/get?fileName="+e,{withCredentials:!0}).then((function(e){b()("#showFile").text("Showing "+a+" File for - "+t),b()("#fileText").val(e.data),b()("#fileText").css("display","block")})).catch((function(e){alert("Service failed: "+e)}))},i.viewFile=function(){var e=b()("#filesTableBody tr.selected").find("td:eq(1)").text(),t=b()("#filesTableBody tr.selected").find("td:eq(3)").text();0!=t&&(e=e.slice(0,e.lastIndexOf("."))+"-"+t+e.slice(e.lastIndexOf("."))),p.a.get(g+"/col/get?fileName="+e,{withCredentials:!0}).then((function(t){b()("#showFile").text("Showing Latest Updated File - "+e),b()("#fileText").val(t.data),b()("#fileText").css("display","block")})).catch((function(e){alert("Service failed: "+e)}))},i.upload=function(){var e=new FormData;e.append("revision","Original"),e.append("file",i.state.file),p()({url:g+"/col/upload",method:"POST",data:e,withCredentials:!0}).then((function(e){if("Success"===e.data.Status)alert("File Uploaded Succesfully"),b()("#upload").prop("disabled",!0),b()("#filename").text(""),i.getFiles();else{if("Invalid Format"===e.data.MSG)return void alert("Only .txt files are allowed");if("Size too big"===e.data.MSG)return void alert("File size should be maximum 5 MB");alert("Not able to upload file")}})).catch((function(e){alert("Service failed "+e)}))},i.fillRevertCmb=function(){b()("#revertCmb").empty();for(var e=0;e<y.length;e++){var t=y[e].revisionFileName,a=y[e].revision;b()("#revertCmb").append(b()("<option> </option>").val(t).html(a))}},i.uploadRevision=function(){var e=b()("#filesTableBody tr.selected").find("td:eq(3)").text(),t=b()("#filesTableBody tr.selected").find("td:eq(1)").text(),a=b()("#commit").val(),l=new FormData;l.append("commit",a),l.append("fileName",t),l.append("noOfRevisions",e),l.append("revision","Revision "+(parseInt(e)+parseInt(1))),l.append("file",i.state.revisionfile),p()({url:g+"/col/upload",method:"POST",data:l,withCredentials:!0}).then((function(e){if("Success"===e.data.Status)alert("New Revision Uploaded for this File"),b()("#uploadRevision").prop("disabled",!0),i.getFiles();else{if("Invalid Format"===e.data.MSG)return void alert("Only .txt files are allowed");if("Size too big"===e.data.MSG)return void alert("File size should be maximum 5 MB");alert("Not able to upload file")}})).catch((function(e){alert("Service failed "+e)}))},i.dragOver=function(e){e.preventDefault()},i.dragEnter=function(e){e.preventDefault()},i.dragLeave=function(e){e.preventDefault()},i.fileDrop=function(e){e.preventDefault();var t=(t=e.dataTransfer.files)[0];i.setState({file:t}),b()("#upload").prop("disabled",!1),b()("#filename").text(t.name)},i.revert=function(){var e=b()("#filesTableBody tr.selected").find("td:eq(1)").text(),t=b()("#revertCmb").find("option:selected").text();p.a.post(g+"/col/revert/revision",h.stringify({fileName:e,revision:t}),{withCredentials:!0}).then((function(e){if("Success"===e.data.Status){alert("File Reverted to "+t),b()("#revertCmb").prop("disabled",!0),b()("#revertRevision").prop("disabled",!0);var a=b()("#filesTableBody tr.selected").find("td:eq(1)").text();i.getFilesRevision(a),i.getFiles(),b()("#showFile").text(""),b()("#fileText").val(""),b()("#fileText").css("display","none")}else alert("Not able to get file revisions")})).catch((function(e){alert("Service failed: "+e)}))},i.state={file:"",revisionfile:""},i}return Object(c.a)(a,[{key:"addTD",value:function(e,t,a){var i=document.createElement("td");i.className=a;var l=document.createTextNode(t);i.append(l),e.append(i)}},{key:"addTDView",value:function(e,t){var a=this,i=document.createElement("td");i.className=t;var l=document.createElement("button");l.style.cursor="pointer",l.style.color="green",l.innerHTML="View File",l.onclick=function(){b()(e).addClass("selected").siblings().removeClass("selected"),a.viewFile(),b()(e).addClass("selected").siblings().find("td:eq(4)").removeClass("selected")},i.append(l),e.append(i)}},{key:"addTDView2",value:function(e,t){var a=this,i=document.createElement("td");i.className=t;var l=document.createElement("button");l.style.cursor="pointer",l.style.color="green",l.innerHTML="View File",l.onclick=function(){b()(e).addClass("selected").siblings().removeClass("selected"),a.viewRevisionFile(),b()(e).addClass("selected").siblings().find("td:eq(4)").removeClass("selected")},i.append(l),e.append(i)}},{key:"render",value:function(){return g=window.httpURL,l.a.createElement("div",{className:"mainContainer"},l.a.createElement("div",{className:"drop-container",onDragOver:this.dragOver,onDragEnter:this.dragEnter,onDragLeave:this.dragLeave,onDrop:this.fileDrop},l.a.createElement("div",{className:"drop-message"},l.a.createElement("div",{id:"fileUpload"},l.a.createElement("input",{type:"file",className:"upload-icon",id:"imageUpload",onChange:this.handleSubmit}),l.a.createElement("label",{for:"imageUpload",className:"btn btn-large"},"Select file"),l.a.createElement("p",{id:"filename",style:{marginLeft:5}})),"Drag & Drop files here or click to upload",l.a.createElement("button",{className:"btn btn-primary",id:"upload",onClick:this.upload},"Upload"))),l.a.createElement("div",{className:"col-sm-12 filesTableWrap"},l.a.createElement("div",{className:"col-md-7 col-xs-10 padding-remove"},l.a.createElement("table",{className:"tableLayout1",style:{width:"97.7%"}},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{className:"no-display",style:{width:40,textAlign:"center"}},"File Id"),l.a.createElement("th",{style:{width:80,textAlign:"center"}},"File Name"),l.a.createElement("th",{style:{width:60,textAlign:"center"}},"Originally Uploaded On"),l.a.createElement("th",{style:{width:40,textAlign:"center"}},"Saved Revisions"),l.a.createElement("th",{style:{width:30,textAlign:"center"}},"View File")))),l.a.createElement("div",{className:"filesTableDiv",style:{height:"349px",overflowY:"scroll",border:"1px solid #ccc"}},l.a.createElement("table",{id:"filesTable",className:"tableLayout"},l.a.createElement("colgroup",null,l.a.createElement("col",{width:"80"}),l.a.createElement("col",{width:"60"}),l.a.createElement("col",{width:"40"}),l.a.createElement("col",{width:"30"})),l.a.createElement("tbody",{id:"filesTableBody"})))),l.a.createElement("div",{className:"col-md-5 col-xs-10 padding-remove"},l.a.createElement("p",{style:{fontWeight:"bold",fontSize:"18px"},id:"revision_text"},"Select a File Name to Upload New Revision"),l.a.createElement("form",{className:"revision-form"},l.a.createElement("div",{class:"form-group",id:"selectrevision"},l.a.createElement("input",{type:"file",className:"upload-revision",id:"revisionFile",onChange:this.handleRevisionSubmit,required:!0}),l.a.createElement("label",{for:"revisionFile",className:"btn btn-large btn-revision"},"Select File"),l.a.createElement("p",{id:"revisionfilename"})),l.a.createElement("div",{class:"form-group",id:"revision_submit"},l.a.createElement("input",{type:"text",autoComplete:"off",class:"form-control",id:"commit",placeholder:"Enter a commit message",required:!0}),l.a.createElement("button",{onClick:this.uploadRevision,class:"btn btn-primary",id:"uploadRevision"},"Upload Revision"))),l.a.createElement("div",{className:"revert_revisions"},l.a.createElement("p",{style:{textAlign:"center",color:"green",fontSize:"18px",marginTop:"10px",fontWeight:"bold"}},"File Revisions"),l.a.createElement("select",{className:"form-control",style:{marginLeft:"15px",width:"32%"},id:"revertCmb"}),l.a.createElement("button",{onClick:this.revert,class:"btn btn-danger",style:{marginRight:"10px"},id:"revertRevision"},"Revert To")),l.a.createElement("table",{className:"tableLayout1",style:{marginLeft:"15px",marginTop:"10px",width:"94.3%"}},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{className:"no-display",style:{width:40,textAlign:"center"}},"File Name"),l.a.createElement("th",{className:"no-display",style:{width:40,textAlign:"center"}},"Revision File Name"),l.a.createElement("th",{style:{width:60,textAlign:"center"}},"Revision"),l.a.createElement("th",{style:{width:80,textAlign:"center"}},"Commit Message"),l.a.createElement("th",{style:{width:60,textAlign:"center"}},"Updated On"),l.a.createElement("th",{style:{width:40,textAlign:"center"}},"View File")))),l.a.createElement("div",{className:"filesRevisionTableDiv",style:{marginLeft:"15px",borderRadius:"5px",height:"145px",overflowY:"scroll",border:"1px solid #ccc"}},l.a.createElement("table",{id:"filesRevisionTable",className:"tableLayout"},l.a.createElement("colgroup",null,l.a.createElement("col",{width:"60"}),l.a.createElement("col",{width:"80"}),l.a.createElement("col",{width:"60"}),l.a.createElement("col",{width:"40"})),l.a.createElement("tbody",{id:"filesRevisionTableBody"}))))),l.a.createElement("p",{id:"showFile"}),l.a.createElement("textarea",{id:"fileText",readOnly:!0}))}}]),a}(i.Component);window.httpURL="http://localhost:8080";var w=function(){return l.a.createElement(r.a,null,l.a.createElement(s.a,{path:"/",basename:"/FilesCollab",exact:!0,component:x}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.cce65034.chunk.js.map
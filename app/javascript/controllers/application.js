// app/javascript/packs/application.js
import "bootstrap"
import "jquery"
import "popper.js"

import "../stylesheets/application.scss"

import { Application } from "@hotwired/stimulus"
const application = Application.start()
window.Stimulus = application

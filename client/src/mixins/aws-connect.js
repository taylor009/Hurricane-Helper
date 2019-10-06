export default {

    data: () => ({

        mounted       : false,
        ccpUrl        : "https://pbt-hackathon.awsapps.com/connect/ccp#", //replace with the CCP URL for your Amazon Connect instance
        logMessages   : [], // move this to vuex w/ localStorage?
        eventMessages : [], // move this to vuex w/ localStorage?
        agent         : {

            name     : null,
            contacts : [],
            status   : null
        },
        currentContact : {

            status     : null,
            attributes : {

                found    : '',
                address  : '',
                first    : '',
                language : '',
                last     : '',
                prompt   : '',
            },
            fromQueue  : null
        },
        contactLog : []
    }),
    mounted(){

        console.log( 'mounted..', connect );

        if( !this.mounted ){ // this is flaw, will change when I understand how not to re-init
            console.log( 'CCP initalized..', connect.agent.initialized );

            connect.core.initCCP( containerDiv, {

                ccpUrl     : this.ccpUrl,
                loginPopup : true,
                softphone  : {

                    allowFramedSoftphone: true
                }
            });

            connect.contact( this.subscribeToContactEvents );
            connect.agent( this.subscribeToAgentEvents );

            this.mounted = true;
        }
    },
    methods: {

        setContactDetails( contact, ended = false ){

            console.log( 'setting contact details: ', contact );
            console.log( 'setting contact status: ', contact.getStatus().type );
            console.log( 'setting contact queue: ', contact.getQueue().name );

            this.currentContact.status    = contact.getStatus().type;
            this.currentContact.fromQueue = contact.getQueue().name;

            if( !ended ){

                let attributes = contact.getAttributes();
                console.log( 'ATTRIBUTES: ', attributes );
                this.currentContact.attributes.found    = attributes.FOUND.value;
                this.currentContact.attributes.address  = attributes.ADDRESS.value;
                this.currentContact.attributes.first    = attributes.FIRST_NAME.value;
                this.currentContact.attributes.language = attributes.LANGUAGE.value;
                this.currentContact.attributes.last     = attributes.LAST_NAME.value;
                this.currentContact.attributes.prompt   = attributes.PROMPT.value;
            }
        },
        subscribeToContactEvents(contact) {

            console.log( 'subscribing contact: ', contact );
            this.setContactDetails( contact );

            this.logInfoMsg("Subscribing to events for contact");
            if (contact.getActiveInitialConnection() 
                && contact.getActiveInitialConnection().getEndpoint()) {

                this.logInfoMsg("New contact is from " + contact.getActiveInitialConnection().getEndpoint().phoneNumber);
            } else {

                this.logInfoMsg("This is an existing contact for this agent");
            }
            this.logInfoMsg( "Contact is from queue " + contact.getQueue().name);
            this.logInfoMsg( "Contact attributes are " + JSON.stringify( contact.getAttributes() ) );
            contact.onIncoming( this.handleContactIncoming );
            contact.onAccepted( this.handleContactAccepted );
            contact.onConnected( this.handleContactConnected );
            contact.onEnded( this.handleContactEnded );
        },
        handleContactIncoming(contact) {

            console.log( 'handling contact incoming..' );
            this.setContactDetails( contact );

            if (contact) {
                logInfoEvent("[contact.onIncoming] Contact is incoming. Contact state is " + contact.getStatus().type);
            } else {
                logInfoEvent("[contact.onIncoming] Contact is incoming. Null contact passed to event handler");
            }
        },
        handleContactAccepted(contact) {

            console.log( 'handling contact accepted..' );
            this.setContactDetails( contact );

            if (contact) {
                logInfoEvent("[contact.onAccepted] Contact accepted by agent. Contact state is " + contact.getStatus().type);
            } else {
                logInfoEvent("[contact.onAccepted] Contact accepted by agent. Null contact passed to event handler");
            }
        },
        handleContactConnected(contact) {

            console.log( 'handling contact connected..' );
            this.setContactDetails( contact );

            if (contact) {
                logInfoEvent("[contact.onConnected] Contact connected to agent. Contact state is " + contact.getStatus().type);
            } else {
                logInfoEvent("[contact.onConnected] Contact connected to agent. Null contact passed to event handler");
            }
        },
        handleContactEnded(contact) {

            console.log( 'handling contact ended..' );
            this.setContactDetails( contact, true );

            if (contact) {
                logInfoEvent("[contact.onEnded] Contact has ended. Contact state is " + contact.getStatus().type);
            } else {
                logInfoEvent("[contact.onEnded] Contact has ended. Null contact passed to event handler");
            }
        },
        setAgentDetails( agent ){

            this.agent.name     = agent.getName();
            this.agent.status   = agent.getStatus().name;
            this.agent.contacts = agent.getContacts();
        },
        subscribeToAgentEvents(agent) {

            console.log( 'subscribing agent: ', agent );

            // save the agent details here
            this.setAgentDetails( agent );

            this.logInfoMsg( "Subscribing to events for agent " + agent.getName() );
            this.logInfoMsg( "Agent is currently in status of " + agent.getStatus().name );
            agent.onRefresh( this.handleAgentRefresh );
            agent.onRoutable( this.handleAgentRoutable );
            agent.onNotRoutable( this.handleAgentNotRoutable );
            agent.onOffline( this.handleAgentOffline );
        },
        handleAgentRefresh(agent) {

            console.log( 'handling agent refresh..' );
            this.setAgentDetails( agent );


            this.logInfoEvent("[agent.onRefresh] Agent data refreshed. Agent status is " + agent.getStatus().name);
        },
        handleAgentRoutable(agent) {

            console.log( 'handling agent routable..' );
            this.setAgentDetails( agent );

            this.logInfoEvent("[agent.onRoutable] Agent is routable. Agent status is " + agent.getStatus().name);
        },
        handleAgentNotRoutable(agent) {

            console.log( 'handling agent not routable..' );
            this.setAgentDetails( agent );


            this.logInfoEvent("[agent.onNotRoutable] Agent is online, but not routable. Agent status is " + agent.getStatus().name);
        },
        handleAgentOffline(agent) {

            console.log( 'handling agent offline..' );
            this.setAgentDetails( agent );

            this.logInfoEvent("[agent.onOffline] Agent is offline. Agent status is " + agent.getStatus().name);
        },

        logMsgToScreen(msg) {

            this.logMessages.push( new Date().toLocaleTimeString() + ' ' + msg);
        },
        logEventToScreen(msg) {

            this.eventMessages.push( new Date().toLocaleTimeString() + ' ' + msg );
        },
        logInfoMsg( msg ) {

            connect.getLog().info( msg );
            this.logMsgToScreen( msg );
        },
        logInfoEvent( eventMsg ) {

            connect.getLog().info( eventMsg );
            this.logEventToScreen( eventMsg );
        }
    }
}
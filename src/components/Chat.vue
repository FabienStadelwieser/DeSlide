<template>
    <div class="chat-panel">
        <Chat
                :participants="participants"
                :myself="myself"
                :messages="messages"
                :onType="onType"
                :onMessageSubmit="onMessageSubmit"
                :chatTitle="chatTitle"
                :placeholder="placeholder"
                :colors="colors"
                :borderStyle="borderStyle"
                :hideCloseButton="hideCloseButton"
                :closeButtonIconSize="closeButtonIconSize"
                :submitIconSize="submitIconSize"/>
    </div>
</template>

<script>
    import {Chat} from 'vue-quick-chat';
    import axios from 'axios';
    import 'vue-quick-chat/dist/vue-quick-chat.css';

    let getUrl = window.location;
    let baseUrl = getUrl.protocol + "//" + getUrl.host.split(":")[0] + ':8000/';

    export default {
        components: {
            Chat
        },
        created: function() {
            let c = this;
            this.timer = setInterval(function() { refresh_messages(c); }, 1000);
            let request = {
                method: 'GET',
                url: baseUrl + 'api/users',
                headers: {
                    'Authorization': 'Token ' + localStorage.token,
                    'Content-Type': 'application/json'
                }
            };

            axios(request).then(function(response) {
                for (let i = 0; i<response.data.length; i++) {
                    if (response.data[i].myself === true) {
                        c.myself = {
                            name: response.data[i].name,
                            id: response.data[i].id
                        };
                    } else {
                        c.participants.push({
                            name: response.data[i].name,
                            id: response.data[i].id
                        });
                    }
                }
            });

            request = {
                method: 'GET',
                url: baseUrl + 'api/chatroom',
                headers: {
                    'Authorization': 'Token ' + localStorage.token,
                    'Content-Type': 'application/json'
                }
            };

            axios(request).then(function (response) {
                let messages = response.data;
                for (let i = 0; i < messages.length; i++) {
                    c.messages.push(
                        {
                            participantId: messages[i]['participantId'],
                            content: messages[i]['text'],
                            timestamp: datetime_to_timestamp_object(messages[i]['sent_at'])
                        }
                    )
                }
            });
        },
        data(){
            return {
                visible: true,
                participants: [],
                myself: {
                },
                messages: [
                ],
                chatTitle: 'Participants',
                placeholder: 'Message',
                colors: {
                    header: {
                        bg: '#232348',
                        text: '#fff'
                    },
                    message: {
                        myself: {
                            bg: '#232348',
                            text: '#f7f3f3'
                        },
                        others: {
                            bg: '#fff',
                            text: '#232348'
                        },
                        messagesDisplay: {
                            bg: '#f7f3f3'
                        }
                    },
                    submitIcon: '#232348'
                },
                borderStyle: {
                },
                hideCloseButton: false,
                submitIconSize: "30px",
                closeButtonIconSize: "0px",
                asyncMode: false,
                toLoad: [
                ],
                scrollBottom: {
                    messageSent: true,
                    messageReceived: false
                },
                displayHeader:true
            }
        },
        methods: {
            onType: function (event) {
                //here you can set any behavior
                event;
            },
            onMessageSubmit: function (message) {
                let c = this;
                let request = {
                    method: 'POST',
                    url: baseUrl + 'api/chatroom',
                    headers: {
                        'Authorization': 'Token ' + localStorage.token,
                        'Content-Type': 'application/json'
                    },
                    data: {
                        'text': message.content
                    }
                };

                axios(request).then(function (response) {
                    let messages = response.data;
                    c.messages = [];
                    for (let i = 0; i < messages.length; i++) {
                        c.messages.push(
                            {
                                participantId: messages[i]['participantId'],
                                content: messages[i]['text'],
                                timestamp: datetime_to_timestamp_object(messages[i]['sent_at'])
                            }
                        )
                    }
                });
            },
            onClose() {
                this.visible = false;
            }
        }
    }

    function datetime_to_timestamp_object(datetime) {
        let d = new Date(datetime);
        return {
            year: d.getFullYear(),
            month: d.getMonth(),
            day: d.getDay(),
            hour: d.getHours(),
            minute: d.getMinutes(),
            second: d.getSeconds()
        }
    }

    function refresh_messages(chat) {
        let request = {
            method: 'GET',
            url: baseUrl + 'api/chatroom',
            headers: {
                'Authorization': 'Token ' + localStorage.token,
                'Content-Type': 'application/json'
            }
        };

        axios(request).then(function (response) {
            chat.messages = [];
            let messages = response.data;
            for (let i = 0; i < messages.length; i++) {
                chat.messages.push(
                    {
                        participantId: messages[i]['participantId'],
                        content: messages[i]['text'],
                        timestamp: datetime_to_timestamp_object(messages[i]['sent_at'])
                    }
                )
            }
        });
    }

</script>

<style scoped>
</style>

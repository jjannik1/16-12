from transformers import AutoTokenizer, AutoModelForCausalLM

from huggingface_hub import login

login(token="")


model_id = "google/gemma-3-4b-it"

tokenizer = AutoTokenizer.from_pretrained(model_id, use_auth_token=True)
model = AutoModelForCausalLM.from_pretrained(model_id, use_auth_token=True)

model.save_pretrained("./gemma-3-4b-it")
tokenizer.save_pretrained("./gemma-3-4b-it")

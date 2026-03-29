import Map "mo:core/Map";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Order "mo:core/Order";
import Int "mo:core/Int";

actor {
  type ContactFormSubmission = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module ContactFormSubmission {
    public func compare(cfs1 : ContactFormSubmission, cfs2 : ContactFormSubmission) : Order.Order {
      Int.compare(cfs1.timestamp, cfs2.timestamp);
    };
  };

  let submissions = Map.empty<Text, ContactFormSubmission>();

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, message : Text) : async Text {
    let id = name.concat(email.concat(message));
    let submission : ContactFormSubmission = {
      name;
      email;
      message;
      timestamp = Time.now();
    };
    submissions.add(id, submission);
    id;
  };

  public query ({ caller }) func getContactFormSubmission(id : Text) : async ContactFormSubmission {
    switch (submissions.get(id)) {
      case (null) { Runtime.trap("Submission does not exist") };
      case (?submission) { submission };
    };
  };

  public query ({ caller }) func getAllContactFormSubmissions() : async [ContactFormSubmission] {
    submissions.values().toArray().sort();
  };
};
